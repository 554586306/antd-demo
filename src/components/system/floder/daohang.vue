<template>
	<div class="daohang" v-drag v-if="drag">
		<div class="con">
			<div>{{app_name}}</div>
			<div class="control">
				<span>小</span>
				<span>大</span>
				<span @click="closeapp">&nbsp;X&nbsp;</span>
			</div>
		</div>
	</div>
	<div class="daohang" v-else>
		<div class="con">
			<div>{{app_name}}</div>
			<div class="control">
				<span>小</span>
				<span>大</span>
				<span @click="closeapp">&nbsp;X&nbsp;</span>
			</div>
		</div>
	</div>
</template>

<script>
	import store from '../../../store/store.js'
	export default {
		props: {
			app_name: String,
			drag: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				
			}
		},
		directives: {
			drag: {
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
		methods: {
			closeapp() {
				this.$emit('closeapp')
			}
		},
		created() {
			console.log(this.drag)
		}

	}
</script>

<style scoped lang="less">
	.daohang {
		height: 50px;
		background: #999;
		user-select: none;

		.con {
			display: flex;
			justify-content: space-between;
			line-height: 50px;
			padding: 0 10px;

			.control {
				span {
					margin-left: 10px;
					background: #fff;
					cursor: pointer;
				}
			}
		}
	}
</style>
