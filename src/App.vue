<template>
  <div id="app">
		<background></background>
		<desktopApp></desktopApp>
		<menuBar></menuBar>
  </div>
</template>

<script>
import background from './components/system/background.vue'
import desktopApp from './components/system/desktopApp.vue'
import menuBar from './components/system/menuBar.vue'

import {windowData} from './static/js/demo-data.js'
export default {
  name: 'app',
  components: {
		background,
		desktopApp,
		menuBar
  },
	methods:{
		addId(){
			var obj = windowData.data.apps;
			for(var i in obj){
				obj[i].appid = this.$store.state.windowData.id
				this.$store.commit("windowData/setId")
			}
			this.$store.commit("windowData/setdata",windowData)
		}
	},
	created(){
		this.addId()
	}
}
</script>

<style scoped lang="less">
</style>
