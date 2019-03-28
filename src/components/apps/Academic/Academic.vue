<template>
	<div>
		Academic{{a}}
		<input type="text">
		<button @click="openFloder">打开新窗口</button>
		<button @click="openPaike">打开评分</button>
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
			openFloder(){
				//打开新（子）窗口
				this.$store.commit("windowData/setId")
				var item = {
					app_folder: "Academic",
					app_icon: "#icon-kaoshi",
					app_name: "学届管理",
					app_url: "/module/Examination-Init-Index",
					appidMd5: this.$parent.appidMd5
				}
				this.$floder(item)
			},
			openPaike(){
				//打开已有窗口
				var desktopApp = this.$store.state.windowData.data.data.apps
				for(var i in desktopApp){
					console.log(desktopApp[i])
					if(desktopApp[i].app_folder == "ClassTeacher"){
						this.$floder(desktopApp[i])
						break;
					}
				}
			}
		},
		created(){
//			console.log(this)
		}
	}
</script>
	
<style>
</style>
