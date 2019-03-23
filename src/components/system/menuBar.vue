<template>
	<div class="menu-bar" :style="{height:height+'px'}">
		<div style="width: 50px;"></div>
		<div class="appicon">
			<div @click="activeapp(item)" v-for="item in desktopApp" class="item" :class="activeApp==item.appid?'activeApp':''">{{item.app_name}}</div>
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
			},
			activeApp (){
				return this.$store.state.windowData.activeApp
			}
		},
		methods:{
			activeapp(item) {
				this.$store.commit("windowData/setActiveApp", item.appid)
			},
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
		display: flex;
		.appicon{
			display: flex;
			heihgt: 100%;
			.item{
				width: 50px;
				height: 100%;
				background: rgba(255, 255, 255, .5);
				margin-right: 5px;
				display: flex;
				justify-content: center;
				align-items: center;
				text-align: center;
				border-left: 1px solid #999;
				border-right: 1px solid #999;
			}
			.activeApp{
				background: #fff;
			}
		}
	}
</style>
