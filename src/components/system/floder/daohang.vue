<template>
	<div class="daohang" @mousedown="mousedown($event)">
		<div class="con">
			<div>{{app_name}}</div>
			<div class="control">
				<span>小</span>
				<span>大</span>
				<span @click="closeapp">X</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			app_name: String
		},
		data() {
			return {

			}
		},
		methods: {
			mousedown(e){
				this.$emit('mousedown1',e)
			},
			closeapp() {
				this.$emit('closeapp')
			}
		},
		created() {
			console.log(this.app_name)
		}

	}
</script>

<style scoped lang="less">
	.daohang {
		height: 50px;
		background: #999;
		user-select: none;

		.con {
			display: flex;
			justify-content: space-between;
			line-height: 50px;
			padding: 0 10px;

			.control {
				span {
					margin-left: 10px;
					background: #fff;
					cursor: pointer;
				}
			}
		}
	}
</style>
