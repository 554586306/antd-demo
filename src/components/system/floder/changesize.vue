<template>
	<div>
		<div class="size size-top" @mousedown="ltr"></div>
		<div class="size size-right"></div>
		<div class="size size-bottom"></div>
		<div class="size size-left"></div>
		<div class="size size-top-left"></div>
		<div class="size size-top-right"></div>
		<div class="size size-bottom-left"></div>
		<div class="size size-bottom-right"></div>
	</div>
</template>

<script>
	
	export default {
		data() {
			return {
			}
		},
		methods:{
			ltr(){
				this.$emit('ltr')
			}
		},
		created(){
			
		}
	}
</script>

<style scoped lang="less">
	@a: 5px;
	@b: 100%;
	.size{
		position: absolute;
		background: #000;
	}
	.size-top{
		height: @a;
		width: @b;
		top: 0;
		cursor: s-resize;
	}
	.size-bottom{
		height: @a;
		width: @b;
		bottom: 0;
		cursor: s-resize;
	}
	.size-right{
		height: @b;
		width: @a;
		right: 0;
		cursor: w-resize;
	}
	.size-left{
		height: @b;
		width: @a;
		left: 0;
		cursor: w-resize;
	}
	.size-top-left{
		top: 0;
		left: 0;
		height: @a;
		width: @a;
		cursor: se-resize;
	}
	.size-top-right{
		top: 0;
		right: 0;
		height: @a;
		width: @a;
		cursor: ne-resize;
	}
	.size-bottom-left{
		bottom: 0;
		left: 0;
		height: @a;
		width: @a;
		cursor: ne-resize;
	}
	.size-bottom-right{
		bottom: 0;
		right: 0;
		height: @a;
		width: @a;
		cursor: se-resize;
	}
</style>
