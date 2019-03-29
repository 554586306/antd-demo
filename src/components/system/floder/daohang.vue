<template>
	<div class="daohang" v-drag="{canIdrag:drag}">
		<div class="con" @dblclick="maxapp">
			<div class="iconname">{{appname}}</div>
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
	export default {
		props: {
			appname: String,
			appid: Number,
			drag: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				maxData:{},
				isMax: false,
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
							document.removeEventListener('mousedown',down)
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
				if(this.isMax){
					this.$parent.width = this.maxData.width
					this.$parent.height = this.maxData.height
					this.$parent.top = this.maxData.top
					this.$parent.left = this.maxData.left
					this.isMax = !this.isMax;
				}else{
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
					this.isMax = !this.isMax;
				}
			},
			minapp(){
				this.$store.commit("windowData/setVisible", this.appid)
			}
		},
		created() {
		}

	}
</script>

<style scoped lang="less">
	.daohang {
		height: 40px;
		// background: rgba(0, 0, 0, .3);
		overflow: hidden;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		.con {
			display: flex;
			justify-content: space-between;
			line-height: 40px;
			padding: 0 10px;
			.iconname{
				color: #000;
				text-shadow: 0 0 5px #fff;
			}
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
