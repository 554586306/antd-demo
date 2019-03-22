<template>
	<div class="menu-bar" :style="{height:height+'px'}" @click="aaa">
		<div style="color:aliceblue">
			{{a}}
		</div>
	</div>
</template>

<script>
	import {initData} from '../../static/js/demo-data.js'

	export default {
		data() {
			return {
				desktopApp: {},
				height: initData.height,
				a: 3
			}
		},
		watch:{
			appmenu:{
				handler(a){
					this.a = a
				},
				deep: true,
				immediate: true
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
