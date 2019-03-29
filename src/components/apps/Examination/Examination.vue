<template>
	<div>
		<div style="width: 100%;height: 100%;background: #000;color: #fff;padding: 5px;">
			<input class="iii" type="text" value=" C : \ " disabled style="width: 30px;">
			<span v-show="a">{{bb}}</span>
			<span class="shan" v-show="a" @click="aaa"> _ </span>
			<input id="iii" v-model="bb" class="iii" type="text" v-show="!a" @blur="a=!a">
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				a: true,
				bb: ''
			}
		},
		computed: {

		},
		methods: {
			aaa(){
				this.a=!this.a;
				setTimeout(()=>{
					document.getElementById('iii').focus()
				},0)
			}
		},
		created() {

		}
	}
</script>

<style>
	.shan {
		cursor: text;
		-webkit-animation: gogogo 1s infinite;
	}
	@-webkit-keyframes gogogo {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	.iii{
		color: #fff;
		border: none;
		outline: none;
		background: #000;
	}
</style>
