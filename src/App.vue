<template>
	<div id="app">
		<background></background>
		<desktopApp></desktopApp>
		<menuBar></menuBar>
		<drawer></drawer>
	</div>
</template>

<script>
	import background from './components/system/background.vue'
	import desktopApp from './components/system/desktopApp.vue'
	import menuBar from './components/system/menuBar.vue'
	import drawer from './components/system/drawer.vue'

	import {
		windowData
	} from './static/js/demo-data.js'
	export default {
		name: 'app',
		components: {
			background,
			desktopApp,
			menuBar,
			drawer
		},
		methods: {
			addId() {
				var obj = windowData.data.apps;
				this.$store.commit("windowData/setdata", windowData)
			}
		},
		created() {
			this.addId()
		}
	}
</script>

<style scoped lang="less">
</style>
