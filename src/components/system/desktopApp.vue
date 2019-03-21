<template>
	<div class="colum" :style="{height:height+'px'}">
		<div v-for="(item) in desktopApp" class="appitem" @dblclick="openapp(item)">
			<span>{{item.app_name}}</span>
		</div>
	</div>
</template>

<script>
	import {initData} from '../../static/js/demo-data.js'
	export default {
		data() {
			return {
				desktopApp: {},
				height: 0
			}
		},
		methods:{
			openapp(item){
				var openId = this.$store.state.windowData.openId
				var exist = openId.some((b)=>{
					return b == item.appid
				})
				if(exist){
					// this.$floder(item,this)
				}else{
					this.$floder(item,this,true)
				}
			}
		},
		created() {
			var that = this;
			this.height = document.body.clientHeight - initData.height
			console.log(document.body.clientHeight)
			window.onresize = function() {
				that.height = document.body.clientHeight - initData.height
			}
			this.desktopApp = this.$store.state.windowData.data.data.apps
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
			background: #000;
			color: #fff;
			width: 100px;
			height: 100px;
			text-align: center;
			line-height: 100px;
			margin: 10px;
			user-select: none;
		}
	}
</style>
