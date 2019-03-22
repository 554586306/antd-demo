<template>
	<div>
		<div class="size size-top" v-ltr></div>
		<div class="size size-right"></div>
		<div class="size size-bottom"></div>
		<div class="size size-left"></div>
		<div class="size size-top-left"></div>
		<div class="size size-top-right"></div>
		<div class="size size-bottom-left"></div>
		<div class="size size-bottom-right"></div>
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
				inserted: function(el,binding,vnode){
					el.onmousedown = function(e){
						var x = e.clientX - el.parentNode.offsetLeft
						var y = e.clientY - el.parentNode.offsetTop
						var height = el.parentNode.offsetHeight;
						var width = el.parentNode.offsetWidth;
						var windowWidth = window.innerWidth;
						var windowHeight = window.innerHeight;
						document.onmousemove = function(e){
							var _x = e.clientX - x;
							var _y = e.clientY - y;
							if (_y <= 0) {
								_y = 0
							}
							if (_x <= 0) {
								_x = 0
							}
							if (_x + width >= windowWidth) {
								_x = windowWidth - width
							}
							if (_y + height >= windowHeight) {
								_y = windowHeight - height
							}
							vnode.context.$parent.top = _y
							vnode.context.$parent.left = _x
						}
						document.onmouseup = function(){
							document.onmousemove = null
							document.onmouseup = null
						}
					}
				}
			}
		},
		created(){
			
		}
	}
</script>

<style scoped lang="less">
	@a: 5px;
	@b: 100%;
	.size{
		position: absolute;
		background: #000;
	}
	.size-top{
		height: @a;
		width: @b;
		top: 0;
		cursor: s-resize;
	}
	.size-bottom{
		height: @a;
		width: @b;
		bottom: 0;
		cursor: s-resize;
	}
	.size-right{
		height: @b;
		width: @a;
		right: 0;
		cursor: w-resize;
	}
	.size-left{
		height: @b;
		width: @a;
		left: 0;
		cursor: w-resize;
	}
	.size-top-left{
		top: 0;
		left: 0;
		height: @a;
		width: @a;
		cursor: se-resize;
	}
	.size-top-right{
		top: 0;
		right: 0;
		height: @a;
		width: @a;
		cursor: ne-resize;
	}
	.size-bottom-left{
		bottom: 0;
		left: 0;
		height: @a;
		width: @a;
		cursor: ne-resize;
	}
	.size-bottom-right{
		bottom: 0;
		right: 0;
		height: @a;
		width: @a;
		cursor: se-resize;
	}
</style>
