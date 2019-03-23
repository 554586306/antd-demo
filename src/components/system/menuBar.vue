<template>
	<div class="menu-bar" :style="{height:height+'px'}" @click="aaa">
		<div>
			{{ desktopApp }}
		</div>
	</div>
</template>

<script>
	import {initData} from '../../static/js/demo-data.js'
	export default {
		data() {
			return {
				height: initData.height,
			}
		},
		computed:{
			desktopApp (){
				return this.$store.state.windowData.openApp
			}
		},
		methods:{
			aaa(){
				console.log(this.desktopApp)
			}
		},
		created(){
			
		}
	}
</script>

<style scoped lang="less">
	.menu-bar{
		position: absolute;
		z-index: 500;
		bottom: 0;
		width: 100%;
		background: rgba(255, 255, 255, .5);
	}
</style>
