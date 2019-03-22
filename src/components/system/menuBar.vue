<template>
	<div class="menu-bar" :style="{height:height+'px'}" @click="aaa">
		<div>
			
		</div>
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
		},
		watch:{
			appmenu:function(a){
				console.log(a)
			}
		},
		computed:{
			appmenu: function(){
				return this.$store.state.windowData.openApp
			}
		},
		methods:{
			aaa(){
				console.log(this.appmenu)
			}
		},
		created(){
			
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
