<template>
	<transition name="slidefade">
		<div @mousedown="activeapp" :ref="'ref_'+appid" v-if="visible" class="floder" :class="activeApp?'floder-active':''"
		 :style="{width:width+'px',height:height+'px','top':top+'px','left':left+'px','zIndex':zIndex}">
			<changesize></changesize>
			<daohang :drag="true" @closeapp="close" :appname="app_name" :appid="appid"></daohang>
			<component :is="app_folder" style="user-select: text;"></component>
		</div>
	</transition>
</template>

<script>
	import daohang from './daohang.vue'
	import changesize from './changesize.vue'
	import store from '../../../store/store.js'
	
	var obj = {
		data() {
			return {
				visible: false,
				iscreate: true,
				width: 500,
				height: 400,
				top: 0,
				left: 0,
				zIndex: 0,
			}
		},
		components: {
			daohang,
			changesize,
		},
		watch: {
			activeApp: function(bool) {
				if (bool) {
					this.zIndex = store.state.windowData.zIndex;
					store.commit("windowData/setzIndex");
				}
			}
		},
		computed: {
			activeApp: function() {
				return store.state.windowData.activeApp == this.appid;
			}
		},
		methods: {
			activeapp() {
				store.commit("windowData/setActiveApp", this.appid)
			},
			close() {
				this.visible = false;
				setTimeout(() => {
					store.commit("windowData/deleteOpenApp", this.appid)
					this.$destroy(true)
					this.$el.parentNode.removeChild(this.$el) // 从DOM里将这个组件移除
				}, 500)
			}
		},
		created() {
			this.width = 500;
			this.height = 400;
			this.top = store.state.windowData.beginTop; //这里修改message.vue数据中的visible,这样message组件就显示出来
			this.left = store.state.windowData.beginLeft; //这里修改message.vue数据中的visible,这样message组件就显示出来
			store.commit("windowData/setPosition")
			this.zIndex = store.state.windowData.zIndex;
			store.commit("windowData/setzIndex")
		},
		mounted() {
		}
	}
	export default obj
	
	var appRequire = require.context('../../apps/', true, /\.vue$/);
	var appPathArr = appRequire.keys();
	appPathArr.forEach(function(appPath) {
		var appName = appPath.replace(/\.vue$/, "");
		appName = appName.replace(/^\.\//, '');
		appName = appName.replace(/(.*)\//, '');
		obj.components[appName] = appRequire(appPath).default;
	});
</script>

<style scoped lang="less">
	.slidefade-enter-active,
	.slidefade-leave-active {
		transition: all .3s ease;
	}

	.slidefade-enter,
	.slidefade-leave-to {
		/* .fade-leave-active below version 2.1.8 */
		transform: translateY(-20px);
		opacity: 0;
	}

	.floder {
		border-radius: 5px;
		background: #fff;
		position: absolute;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, .1);
	}

	.floder-active {
		box-shadow: 0px 0px 10px rgba(0, 0, 0, .5);
	}
</style>
