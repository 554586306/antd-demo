<template>
	<transition name="message-fade">
		<div :ref="'ref_'+appid" v-if="visible" class="message" :style="{'top':top+'px','left':left+'px','zIndex':zIndex}">
			<daohang @mousedown1="mousedown" @closeapp="close" :app_name="app_name"></daohang>
		</div>
	</transition>
</template>

<script>
	import daohang from './daohang.vue'
	export default {
		data() {
			return {
				visible: false,
				top: 0,
				left: 0,
				zIndex: 0
			}
		},
		components:{
			daohang
		},
		methods: {
			mousedown(e){
				var that = this;
				var y = e.clientY - that.$refs['ref_'+that.appid].offsetTop;
				var x = e.clientX - that.$refs['ref_'+that.appid].offsetLeft;
				var height = that.$refs['ref_'+that.appid].offsetHeight;
				var width = that.$refs['ref_'+that.appid].offsetWidth;
				var windowWidth = window.innerWidth;
				var windowHeight = window.innerHeight;
				window.onmousemove = function(e) {
					var _x = e.clientX - x;
					var _y = e.clientY - y;
					console.log(_x)
					if(_y <= 0){
						_y = 0
					}
					if(_x <= 0){
						_x = 0
					}
					if(_x + width >= windowWidth){
						_x = windowWidth - width
					}
					if(_y + height >= windowHeight){
						_y = windowHeight - height
					}
					
					that.top = _y
					that.left = _x
					window.onmouseup = function(){
						window.onmousemove = null;
					}
				}
			},
			close() {
				this.visible = false
				setTimeout(() => {
					this.$destroy(true)
					this.$el.parentNode.removeChild(this.$el) // 从DOM里将这个组件移除
				}, 500)
			}
		},
		created() {
		},
		mounted(){
			console.log(this.appid)
			
		}
	}
</script>

<style scoped lang="less">
	.message-fade-enter-active, .message-fade-leave-active {
        transition: all .3s ease;
    }
    .message-fade-enter, .message-fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        transform: translateY(-20px);
        opacity: 0;
    }
	.message {
		width: 500px;
		height: 400px;
		background: #fff;
		position: absolute;
		box-shadow: 0px 0px 10px rgba(0,0,0,.3);
	}
</style>
