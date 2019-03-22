<template>
	<div>
		<div class="size size-top" v-ttb></div>
		<div class="size size-left" v-ltr></div>
		<div class="size size-bottom" v-btt></div>
		<div class="size size-right" v-rtl></div>
		<div class="size size-top-left" v-ttb v-ltr></div>
		<div class="size size-top-right" v-ttb v-rtl></div>
		<div class="size size-bottom-left" v-btt v-ltr></div>
		<div class="size size-bottom-right" v-btt v-rtl></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		directives: {
			ltr: {
				inserted: function(el, binding, vnode) {
					var down = function(e) {
						var width = vnode.context.$parent.width
						var x = e.clientX - el.parentNode.offsetLeft
						var move = function(e) {
							var _x = e.clientX - x;
							vnode.context.$parent.left = e.clientX
							vnode.context.$parent.width = width - _x
						}
						var up = function(e) {
							document.removeEventListener('mousemove',move)
							document.removeEventListener('mouseup', up)
						}
						document.addEventListener('mousemove', move)
						document.addEventListener('mouseup', up)
					}
					el.addEventListener('mousedown', down)
				}
			},
			rtl: {
				inserted: function(el, binding, vnode) {
					var down = function(e) {
						var width = vnode.context.$parent.width
						var x = e.clientX
						var move = function(e) {
							var _x = e.clientX - x;
							vnode.context.$parent.width = width + _x
						}
						var up = function(e) {
							document.removeEventListener('mousemove',move)
							document.removeEventListener('mouseup', up)
						}
						document.addEventListener('mousemove', move)
						document.addEventListener('mouseup', up)
					}
					el.addEventListener('mousedown', down)
				}
			},
			ttb: {
				inserted: function(el, binding, vnode) {
					var down = function(e) {
						var height = vnode.context.$parent.height
						var y = e.clientY - el.parentNode.offsetTop
						var move = function(e) {
							var _y = e.clientY - y;
							vnode.context.$parent.top = e.clientY
							vnode.context.$parent.height = height - _y
						}
						var up = function(e) {
							document.removeEventListener('mousemove',move)
							document.removeEventListener('mouseup', up)
						}
						document.addEventListener('mousemove', move)
						document.addEventListener('mouseup', up)
					}
					el.addEventListener('mousedown', down)
				}
			},
			btt: {
				inserted: function(el, binding, vnode) {
					var down = function(e) {
						var height = vnode.context.$parent.height
						var y = e.clientY
						var move = function(e) {
							var _y = e.clientY - y;
							vnode.context.$parent.height = height + _y
						}
						var up = function(e) {
							document.removeEventListener('mousemove',move)
							document.removeEventListener('mouseup', up)
						}
						document.addEventListener('mousemove', move)
						document.addEventListener('mouseup', up)
					}
					el.addEventListener('mousedown', down)
				}
			}
		},
		created() {

		}
	}
</script>

<style scoped lang="less">
	@a: 5px;
	@b: 100%;
	@c: -5px;

	.size {
		position: absolute;
	}

	.size-top {
		height: @a;
		width: @b;
		top: @c;
		cursor: s-resize;
	}

	.size-bottom {
		height: @a;
		width: @b;
		bottom: @c;
		cursor: s-resize;
	}

	.size-right {
		height: @b;
		width: @a;
		right: @c;
		cursor: w-resize;
	}

	.size-left {
		height: @b;
		width: @a;
		left: @c;
		cursor: w-resize;
	}

	.size-top-left {
		top: @c;
		left: @c;
		height: @a;
		width: @a;
		cursor: se-resize;
	}

	.size-top-right {
		top: @c;
		right: @c;
		height: @a;
		width: @a;
		cursor: ne-resize;
	}

	.size-bottom-left {
		bottom: @c;
		left: @c;
		height: @a;
		width: @a;
		cursor: ne-resize;
	}

	.size-bottom-right {
		bottom: @c;
		right: @c;
		height: @a;
		width: @a;
		cursor: se-resize;
	}
</style>
