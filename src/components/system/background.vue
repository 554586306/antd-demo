<template>
	<div :style="setImg" class="desktop-bg"></div>
</template>

<script>
	import forests1 from '../../static/img/forests1.jpg'
	import forests2 from '../../static/img/forests2.jpg'
	import forests3 from '../../static/img/forests3.jpg'
	import forests4 from '../../static/img/forests4.jpg'
	import forests5 from '../../static/img/forests5.jpg'
	import forests6 from '../../static/img/forests6.jpg'
	import forests7 from '../../static/img/forests7.jpg'
	import forests8 from '../../static/img/forests8.jpg'
	import forests9 from '../../static/img/forests9.jpg'
	import forests10 from '../../static/img/forests10.jpg'
	export default {
		data(){
			return {
				num: 0,
				img: [forests1,forests2,forests3,forests4,forests5,forests6,forests7,forests8,forests9,forests10]
			}
		},
		computed:{
			setImg(){
				if(this.num>=this.img.length) this.num = 0;
				return {backgroundImage: `url(${this.img[this.num]})`}
			},
		},
		methods: {
			
		},
	}
</script>

<style scoped>
	.desktop-bg{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		/* background: #eee; */
		/* background-image: url(../../static/img/forests14.jpg); */
		background-size: cover;
	}
</style>
