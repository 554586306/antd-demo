<template>
	<div>
		<input type="text" v-model="a"><br>
		Academic{{a}}<br>
		<button @click="openFloder('Academic')">打开无限子页面</button><br>
		<button @click="openGuding('xinxin')">打开固定子页面</button><br>
		<button @click="openPaike('ClassTeacher')">打开桌面评分页面</button><br>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				a: 'EEE'
			}
		},
		computed:{
			
		},
		methods:{
			openFloder(component){
				//打开新（子）窗口
				this.$store.commit("windowData/setId")
				var item = {
					app_folder: component,
					app_icon: "#icon-kaoshi",
					app_name: "学届管理",
					app_url: "/module/Examination-Init-Index",
					// appidMd5: this.$parent.appidMd5,
				}
				this.$floder(item)
			},
			openGuding(component){
				var desktopApp = this.$store.state.windowData.data.data.apps
				for(var i in desktopApp){
					if(desktopApp[i].app_folder == component){
						this.$floder(desktopApp[i])
						return;
					}
				}
				var num = Math.round(Math.random()*10000000000000000)
				desktopApp[num] = {
					"app_name": "学届管理",
					"app_icon": "#icon-kaoshi",
					"app_url": "/module/Examination-Init-Index",
					"app_folder": component,
					// "appidMd5": this.$parent.appidMd5,
					"children": true
				}
				this.$floder(desktopApp[num])
			},
			openPaike(component){
				var desktopApp = this.$store.state.windowData.data.data.apps
				//打开桌面窗口
				for(var i in desktopApp){
					if(desktopApp[i].app_folder == component){
						this.$floder(desktopApp[i])
						return;
					}
				}
			}
		},
		created(){
			// console.log(this)
		}
	}
</script>
	
<style>
</style>
