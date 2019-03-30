<!-- 使用方法 -->
<!-- <div v-contextmenu:aaa></div>
<context-menu ref="aaa">
	<div class="item">
		<span class="icon">i</span>
		<span class="text">321</span>
	</div>
</context-menu> -->
<!-- 使用方法 -->

<template>
	<transition name="context">
		<div class="contextMenu" v-if="isShow" ref="menu" :style="{top:top+'px',left:left+'px'}">
			<slot></slot>
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
				isShow: false,
				top: 0,
				left: 0,
			}
		},
		watch:{
			
		},
		computed: {
			
		},
		methods: {
			doToggle(e) {
				e.preventDefault();
				this.top = e.clientY;
				this.left = e.clientX;
			  this.isShow = !this.isShow;
				console.log(this.isShow)
			},
			handleDocumentClick(e) {
			  const menu = this.menu || this.$refs.menu;
				if(!this.$el.contains(e.target)){
					console.log(false)
					this.isShow = false
				}
			},
		},
		mounted(){
			let reference = this.referenceElm = this.reference || this.$refs.reference;
			if(reference){
				reference.addEventListener('contextmenu', this.doToggle)
				document.addEventListener('click', this.handleDocumentClick)
			}
			
// 			document.onclick = (e)=>{
// 				if(!this.$el.contains(e.target)){
// 					console.log('yes')
// 					this.isShow = false
// 				}
// 			}
		},
		destroyed() {
			// const reference = this.reference;
			
// 			reference.removeEventListener('contextmenu', this.doToggle)
// 			document.removeEventListener('click', this.handleDocumentClick)
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
			&:last-child {
				border-bottom: none;
			}
		}
	}
</style>
