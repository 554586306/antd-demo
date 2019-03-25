<template>
	<div>
		<a-drawer wrapClassName="first-drawer" title="Basic Drawer" placement="right" :closable="false" @close="onClose" :visible="visible">
			<p>Some contents...</p>
			<p>Some contents...</p>
			<p>Some contents...</p>
		</a-drawer>
	</div>
</template>
<script>
	import store from '../../store/store.js'
	export default {
		data() {
			return {
			}
		},
		computed: {
			visible: function() {
				return store.state.windowData.showDrawer == true;
			}
		},
		methods: {
			onClose() {
				store.commit("windowData/setShowDrawer")
			},
		},
	}
</script>

<style scoped>
	
</style>
