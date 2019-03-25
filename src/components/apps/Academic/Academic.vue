<template>
	<div>
		Academic{{a}}
		<input type="text">
		<button @click="openFloder">打开新窗口</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				a: 1
			}
		},
		computed:{
			
		},
		methods:{
			openFloder(){
				var item = {
					app_folder: "Academic",
					app_icon: "#icon-kaoshi",
					app_name: "学届管理",
					app_url: "/module/Examination-Init-Index",
				}
				this.$floder(item)
			}
		},
		created(){
			
		}
	}
</script>
	
<style>
</style>
