<template>
	<transition name="slidefade">
		<div @mousedown="activeapp" :ref="'ref_'+appid" v-show="visible" class="floder" :class="activeApp?'floder-active':''"
		 :style="{width:width+'px',height:height+'px','top':top+'px','left':left+'px','zIndex':zIndex}">
			<changesize></changesize>
			<daohang :drag="true" @closeapp="close" :appname="app_name" :appid="appid"></daohang>
			<component :is="app_folder" class="boxcon ismargin"></component>
		</div>
	</transition>
</template>

<script>
	import daohang from './daohang.vue'
	import changesize from './changesize.vue'
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
				closeflag: false  // 防止快速多次点击
			}
		},
		components: {
			daohang,
			changesize,
		},
		watch: {
			closeApp: function(bool) {
				this.close()
			}
		},
		computed: {
			activeApp() {
				return this.$store.state.windowData.activeApp == this.appid;
			},
			closeApp() {
				return this.$store.state.windowData.closeApp == this.appid;
			},
		},
		methods: {
			changeMax(bool){
				this.ismax = !this.ismax
			},
			activeapp() {
				if(this.closeflag) return;
				this.$store.commit("windowData/setActiveApp", this.appid)
			},
			close() {
				if(this.closeflag) return;
				this.closeflag = true
				this.visible = false;
				this.$store.commit("windowData/deleteOpenApp", this.appid)
				setTimeout(() => {
					this.$destroy(true)
					this.$el.parentNode.removeChild(this.$el) // 从DOM里将这个组件移除
					this.closeflag = false
				}, 500)
			}
		},
		created() {
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
	
	.slidefade-enter{
		transform: translateY(300px) translateX(-300px) scale(0.2) scaleY(0.2);
		opacity: 0;
	}
	.slidefade-leave-to {
		/* .fade-leave-active below version 2.1.8 */
		transform: translateY(300px) translateX(-300px) scale(0.2) scaleY(0.2);
		opacity: 0;
	}
	
	.floder {
		border-radius: 5px;
		background: rgba(255, 255, 255, .6);
		position: absolute;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, .2);
		display: flex;
		flex-direction: column;
		.boxcon{
			flex: 1;
			background: #fff;
			border-bottom-left-radius: 5px;
			border-bottom-right-radius: 5px;
			overflow: hidden;
		}
		.ismargin{
			margin: 5px;
			margin-top: 0;
		}
	}

	.floder-active {
		box-shadow: 0px 0px 10px rgba(0, 0, 0, .5);
	}
</style>
