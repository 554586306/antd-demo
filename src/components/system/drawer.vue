<template>
	<div>
		<a-drawer wrapClassName="first-drawer" title="Basic Drawer" placement="right" :closable="false" @close="onClose" :visible="visible">
			<p>Some contents...</p>
			<p>Some contents...</p>
			<p>Some contents...</p>
			<button @click="openPaike('ClassTeacher')">打开评分</button>
		</a-drawer>
	</div>
</template>
<script>
	export default {
		data() {
			return {
			}
		},
		computed: {
			visible: function() {
				return this.$store.state.windowData.showDrawer == true;
			}
		},
		methods: {
			onClose() {
				this.$store.commit("windowData/setShowDrawer")
			},
			openPaike(component){
				//打开已有窗口
				var desktopApp = this.$store.state.windowData.data.data.apps
				for(var i in desktopApp){
					if(desktopApp[i].app_folder == component){
						this.$floder(desktopApp[i])
						this.onClose()
						break;
					}
				}
			}
		},
	}
</script>

<style scoped>
	
</style>
