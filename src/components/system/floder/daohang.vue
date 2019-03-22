<template>
	<div class="daohang" v-drag v-if="drag">
		<div class="con">
			<div>{{app_name}}</div>
			<div class="control">
				<span @click="minapp">小</span>
				<span @click="maxapp">大</span>
				<span @click="closeapp">&nbsp;X&nbsp;</span>
			</div>
		</div>
	</div>
	<div class="daohang" v-else>
		<div class="con">
			<div>{{app_name}}</div>
			<div class="control">
				<span @click="minapp">小</span>
				<span @click="maxapp">大</span>
				<span @click="closeapp">&nbsp;X&nbsp;</span>
			</div>
		</div>
	</div>
</template>

<script>
	import {initData} from '../../../static/js/demo-data.js'
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
				maxData:{}
			}
		},
		directives: {
			drag: {
				inserted: function(el,binding,vnode){
					var down = function(e) {
						var x = e.clientX - el.parentNode.offsetLeft
						var y = e.clientY - el.parentNode.offsetTop
						var height = el.parentNode.offsetHeight;
						var width = el.parentNode.offsetWidth;
						var windowWidth = window.innerWidth;
						var windowHeight = window.innerHeight;
						var move = function(e) {
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
						var up = function(e) {
							document.removeEventListener('mousemove',move)
							document.removeEventListener('mouseup', up)
						}
						document.addEventListener('mouseup', up)
						document.addEventListener('mousemove', move)
					}
					el.addEventListener('mousedown', down)
				}
			}
		},
		methods: {
			closeapp() {
				this.$emit('closeapp')
			},
			maxapp(){
				this.maxData = {
					width: String(this.$parent.width),
					height: String(this.$parent.height),
					top: String(this.$parent.top),
					left: String(this.$parent.left), 
				}
				this.$parent.width = window.innerWidth;
				this.$parent.height = window.innerHeight - initData.height;
				this.$parent.top = 0;
				this.$parent.left = 0;
			},
			minapp(){
				console.log('xiao')
			}
		},
		created() {
		}

	}
</script>

<style scoped lang="less">
	.daohang {
		height: 50px;
		background: #999;
		user-select: none;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
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
