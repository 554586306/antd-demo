<template>
  <div id="app">
		<background></background>
		<desktopApp></desktopApp>
		<menuBar></menuBar>
  </div>
</template>

<script>
import background from './components/background.vue'
import desktopApp from './components/desktopApp.vue'
import menuBar from './components/menuBar.vue'

import windowData from './static/js/demo-data.js'
export default {
  name: 'app',
  components: {
		background,
		desktopApp,
		menuBar
  },
	created(){
		this.$store.commit("windowData/setdata",windowData)
	}
}
</script>

<style>
</style>
