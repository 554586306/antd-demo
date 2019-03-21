<template>
	<div class="menu-bar" :style="{height:height+'px'}">
		
	</div>
</template>

<script>
	import {initData} from '../../static/js/demo-data.js'
	export default {
		data() {
			return {
				desktopApp: {},
				height: initData.height
			}
		}
	}
</script>

<style scoped lang="less">
	.menu-bar{
		position: absolute;
		bottom: 0;
		width: 100%;
		background: #111;
	}
</style>
