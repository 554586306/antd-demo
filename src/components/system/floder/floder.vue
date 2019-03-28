<template>
	<transition name="slidefade">
		<div @mousedown="activeapp" :ref="'ref_'+appid" v-show="visible" class="floder" :class="activeApp?'floder-active':''"
		 :style="{width:width+'px',height:height+'px','top':top+'px','left':left+'px','zIndex':zIndex}">
			<changesize></changesize>
			<daohang :drag="true" @closeapp="close" :appname="app_name" :appid="appid"></daohang>
			<component :is="app_folder" class="boxcon"></component>
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
			}
		},
		components: {
			daohang,
			changesize,
		},
		watch: {
			activeApp: function(bool) {
				if (bool) {
					this.$store.commit("windowData/setzIndex");
					this.zIndex = this.$store.state.windowData.zIndex;
				}
			}
		},
		computed: {
			activeApp: function() {
				return this.$store.state.windowData.activeApp == this.appid;
			}
		},
		methods: {
			activeapp() {
				this.$store.commit("windowData/setActiveApp", this.appid)
			},
			close() {
				this.visible = false;
				this.$store.commit("windowData/deleteOpenApp", this.appid)
				setTimeout(() => {
					this.$destroy(true)
					this.$el.parentNode.removeChild(this.$el) // 从DOM里将这个组件移除
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
		display: flex;
		flex-direction: column;
		.boxcon{
			flex: 1;
			border-bottom-left-radius: 5px;
			border-bottom-right-radius: 5px;
			overflow: hidden;
		}
	}

	.floder-active {
		box-shadow: 0px 0px 10px rgba(0, 0, 0, .5);
	}
</style>
