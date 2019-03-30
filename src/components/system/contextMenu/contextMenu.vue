<template>
	<transition name="context">
		<div class="contextMenu" v-if="visible" :style="{top:top+'px',left:left+'px'}">
			<div class="item" v-for="(item,key) in list" @click="item.action">
				<span class="icon">{{item.icon}}</span>
				<span class="text">{{item.text}}</span>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		name: 'contextMenu',
		props: {
		},
		data() {
			return {
				visible: false,
				top: 0,
				left: 0,
			}
		},
		watch:{
		},
		computed: {
		},
		methods: {
			close() {
				this.visible = false;
				setTimeout(() => {
					this.$destroy(true)
					this.$el.parentNode.removeChild(this.$el) // 从DOM里将这个组件移除
				}, 220)
			},
			handleDocumentClick(e) {
				if(!this.$el.contains(e.target)){
					this.close()
				}
			},
		},
		mounted(){
			document.addEventListener('mousedown',this.handleDocumentClick)
		},
		destroyed() {
			document.removeEventListener('mousedown', this.handleDocumentClick)
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

	.contextMenu {
		width: 150px;
		background: #fff;
		position: fixed;
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
			.text{
				padding-left: 10px;
			}
			&:last-child {
				border-bottom: none;
			}
		}
	}
</style>
