<template>
	<div class="colum" :style="{height:height+'px'}">
		<div v-for="(item) in desktopApp" class="appitem" @dblclick="openapp(item)" v-if="!item.children">
			<span>{{item.app_name}}</span>
		</div>
	</div>
</template>

<script>
	import {initData} from '../../static/js/demo-data.js'
	export default {
		data() {
			return {
				height: 0
			}
		},
		computed:{
			desktopApp (){
				return this.$store.state.windowData.data.data.apps
			},
		},
		methods:{
			openapp(item){
				if(item.app_name == '资产管理'){
					this.$floder(item,{width:900,height:700})
				}else{
					this.$floder(item)
				}
			}
		},
		created() {
			var that = this;
			this.height = document.body.clientHeight - initData.height
			window.onresize = function() {
				that.height = document.body.clientHeight - initData.height
			}
		}
	}
</script>

<style scoped lang="less">
	.colum {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-content: flex-start;
		
		.appitem {
			position: relative;
			z-index: 1;
			background: rgba(255, 255, 255, .1);
			border-radius: 4px;
			box-shadow: 0 0 5px rgba(0, 0, 0, .5);
			color: #fff;
			width: 80px;
			height: 80px;
			text-align: center;
			line-height: 100px;
			margin: 10px;
		}
	}
</style>
