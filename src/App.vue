<template>
  <div id="app">
		<background></background>
		<desktopApp></desktopApp>
  </div>
</template>

<script>
import background from './components/background.vue'
import desktopApp from './components/desktopApp.vue'
import windowData from './static/js/demo-data.js'
export default {
  name: 'app',
  components: {
		background,
		desktopApp
  },
	created(){
		this.$store.commit("windowData/setdata",windowData)
	}
}
</script>

<style>
</style>
