<template>
	<transition name="context">
		<div class="con" v-if="isShow" ref="contextMenu">
			<slot></slot>
			<!-- <div class="item">
				<span class="icon">i</span>
				<span class="text"></span>
			</div> -->
		</div>
	</transition>
</template>

<script>
	export default {
		name: 'contextMenu',
		props: {
		  reference: {},
		},
		data() {
			return {
				isShow: false,
			}
		},
		computed: {
			
		},
		methods: {
			doToggle(e) {
				e.preventDefault();
			  this.isShow = !this.isShow;
			},
			handleDocumentClick(e) {
// 			  let reference = this.reference || this.$refs.reference;
// 			  const popper = this.popper || this.$refs.popper;
// 			
// 			  if (!reference && this.$slots.reference && this.$slots.reference[0]) {
// 			    reference = this.referenceElm = this.$slots.reference[0].elm;
// 			  }
// 			  if (!this.$el ||
// 			    !reference ||
// 			    this.$el.contains(e.target) ||
// 			    reference.contains(e.target) ||
// 			    !popper ||
// 			    popper.contains(e.target)) return;
// 			  this.showPopper = false;
			},
		},
		mounted(){
			let reference = this.referenceElm = this.reference || this.$refs.reference;
			console.log(this)
			
			// reference.addEventListener('contextmenu', this.doToggle)
// 			document.addEventListener('click', this.handleDocumentClick)
			
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

	.con {
		width: 150px;
		background: #fff;
		position: fixed;
		top: 100px;
		left: 0;
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
