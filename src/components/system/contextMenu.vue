<template>
	<transition name="context">
		<div class="con" v-if="contextMenu.isShow" :style="{top:contextMenu.y+'px',left:contextMenu.x+'px'}">
			<div class="item" v-for="(item,index) in contextMenu.list" @click.stop="handler(item)">
				<span class="icon">i</span>
				<span class="text"> {{item.text}}</span>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		computed: {
			contextMenu() {
				return this.$store.state.windowData.contextMenu
			},
		},
		methods: {
			handler(item) {
				if (item.action) {
					item.action.handler()
				} else {
					console.log('没有事件')
				}
			}
		}
	}
</script>

<style scoped lang="less">
	.context-enter-active,
	.context-leave-active {
		transition: all .2s ease;
	}

	.context-enter {
		// transform: scale(.5);
		opacity: 0;
	}

	.context-leave-to {
		/* .fade-leave-active below version 2.1.8 */
		// transform: scale(.5);
		opacity: 0;
	}

	.con {
		width: 150px;
		background: #fff;
		position: absolute;
		box-shadow: 0 0 5px rgba(0, 0, 0, .5);
		border-radius: 2px;
		z-index: 1001;

		.item {
			height: 35px;
			line-height: 35px;
			padding: 0 5px;
			border-bottom: 1px solid #eee;
			.icon{
				width: 25px;
				text-align: center;
				display: inline-block;
				border-right: 1px solid #eee;
			}
			&:last-child {
				border-bottom: none;
			}
		}
	}
</style>
