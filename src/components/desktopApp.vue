<template>
	<div class="colum" :style="{height:height+'px'}">
		<div v-for="(item) in desktopApp" class="appitem">
			<span>{{item.app_name}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				desktopApp: {},
				height: 0
			}
		},
		created() {
			var that = this;
			this.height = document.body.clientHeight
			window.onresize = function() {
				that.height = document.body.clientHeight
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
		}
	}
</style>
