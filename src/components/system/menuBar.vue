<template>
	<div class="menu-bar" :style="{height:height+'px'}">
		<div style="width: 50px;"></div>
		<div class="appicon">
			<div @contextmenu.stop.prevent="openContextMenu($event,item)" @click="activeapp(item)" v-for="(item,index) in desktopApp" class="item" :class="activeApp==item.appid?'activeApp':''">{{item.app_name}}</div>
		</div>
		<div class="appicon" style="position: absolute;right: 0;height: 100%;">
			<div class="item" @click="showDrawer">抽屉</div>
		</div>
	</div>
</template>

<script>
	import {
		initData
	} from '../../static/js/demo-data.js';
	export default {
		data() {
			return {
				height: initData.height,
				item: {}
			}
		},
		computed: {
			desktopApp() {
				return this.$store.state.windowData.openApp
			},
			activeApp() {
				return this.$store.state.windowData.activeApp
			},
		},
		methods: {
			closeApp(){
				console.log(this.item)
				this.$store.commit("windowData/setCloseApp", this.item.appid)
			},
			openContextMenu(e,item){
				this.item = item
				this.$contextMenu({e,
					list:[
						{icon:'1',text:'关闭窗口',action:this.closeApp}
					]
				})
			},
			showDrawer() {
				this.$store.commit("windowData/setShowDrawer")
			},
			activeapp(item) {
				var active = this.$store.state.windowData.activeApp
				if (item.visible == false) { // 已经隐藏，先显示，并跳到最前面
					this.$store.commit("windowData/setVisible", item.appid)
					this.$store.commit("windowData/setActiveApp", item.appid)
				} else if (active != item.appid) { // 不在最前面，跳到最前面
					this.$store.commit("windowData/setActiveApp", item.appid)
				} else {
					this.$store.commit("windowData/setVisible", item.appid)
				}
			},
		},
		created() {
			
		}
	}
</script>

<style scoped lang="less">
	.menu-bar {
		position: absolute;
		z-index: 500;
		bottom: 0;
		width: 100%;
		background: rgba(255, 255, 255, .1);
		display: flex;

		.appicon {
			display: flex;
			heihgt: 100%;

			.item {
				width: 50px;
				padding: 0 5px;
				height: 100%;
				background: rgba(255, 255, 255, .5);
				margin-right: 5px;
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
				text-align: center;
				border-left: 1px solid #999;
				border-right: 1px solid #999;
			}

			.activeApp {
				background: #fff;
			}
		}
	}
</style>
