<template>
	<transition name="message-fade">
		<div @mousedown="activeapp" :ref="'ref_'+appid" v-if="visible" class="floder" :class="activeApp?'floder-active':''" :style="{'top':top+'px','left':left+'px','zIndex':zIndex}">
			<changesize></changesize>
			<daohang :drag="true" @closeapp="close" :app_name="app_name"></daohang>
		</div>
	</transition>
</template>

<script>
	import daohang from './daohang.vue'
	import changesize from './changesize.vue'
	import store from '../../../store/store.js'
	
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
			daohang,
			changesize
		},
		watch:{
			activeApp: function(bool){
				if(bool){
					this.zIndex = store.state.windowData.zIndex;
					store.commit("windowData/setzIndex")
				}
			}
		},
		computed:{
			activeApp: function(){
				return store.state.windowData.activeApp == this.appid;
			}
		},
		methods: {
			activeapp(){
				store.commit("windowData/setActiveApp",this.appid)
			},
			close() {
				this.visible = false
				setTimeout(() => {
					store.commit("windowData/deleteOpenApp",this.appid)
					this.$destroy(true)
					this.$el.parentNode.removeChild(this.$el) // 从DOM里将这个组件移除
				}, 500)
			}
		},
		created() {
			this.top = store.state.windowData.beginTop; //这里修改message.vue数据中的visible,这样message组件就显示出来
			this.left = store.state.windowData.beginLeft; //这里修改message.vue数据中的visible,这样message组件就显示出来
			store.commit("windowData/setPosition")
			this.zIndex = store.state.windowData.zIndex;
			store.commit("windowData/setzIndex")
		},
		mounted(){
			// console.log(this.appid)
			
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
	.floder {
		width: 500px;
		height: 400px;
		border-radius: 5px;
		overflow: hidden;
		background: #fff;
		position: absolute;
		box-shadow: 0px 0px 10px rgba(0,0,0,.1);
	}
	.floder-active{
		box-shadow: 0px 0px 10px rgba(0,0,0,.5);
	}
</style>
