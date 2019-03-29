<template>
	<!-- @contextmenu.stop.prevent -->
	<div id="app" @click.stop="hideContextMenu" @contextmenu.stop.prevent>
		<background></background>
		<desktopApp></desktopApp>
		<menuBar></menuBar>
		<drawer></drawer>
		<contextMenu></contextMenu>
	</div>
</template>

<script>
	import background from './components/system/background.vue'
	import desktopApp from './components/system/desktopApp.vue'
	import menuBar from './components/system/menuBar.vue'
	import drawer from './components/system/drawer.vue'
	import contextMenu from './components/system/contextMenu.vue'

	import {
		windowData
	} from './static/js/demo-data.js'
	
	export default {
		name: 'app',
		components: {
			background,
			desktopApp,
			menuBar,
			drawer,
			contextMenu
		},
		methods: {
			addId() {
				var obj = windowData.data.apps;
				this.$store.commit("windowData/setdata", windowData)
			},
			hideContextMenu(){
				this.$store.commit("windowData/setContextMenu", {isShow: false})
			}
		},
		created() {
			this.addId()
		}
	}
</script>

<style scoped lang="less">
</style>
