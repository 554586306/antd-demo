import Vue from 'vue'
const floderConstructor = Vue.extend(require('./floder.vue').default) // 直接将Vue组件作为Vue.extend的参数
const floder = (options,it,bool) => {
	const floderInstance = new floderConstructor({ // 实例化一个带有content内容的Notice
		data: options //在这里将你传过来的参数匹配到floder.vue组件的data
	})
	floderInstance.appid = options.appid
	floderInstance.vm = floderInstance.$mount(); // 挂载但是并未插入dom，是一个完整的Vue实例
	floderInstance.vm.visible = true //这里修改message.vue数据中的visible,这样message组件就显示出来
	if(bool){
		floderInstance.vm.top = it.$store.state.windowData.beginTop; //这里修改message.vue数据中的visible,这样message组件就显示出来
		floderInstance.vm.left = it.$store.state.windowData.beginLeft; //这里修改message.vue数据中的visible,这样message组件就显示出来
		it.$store.commit("windowData/setPosition")
	}
	floderInstance.vm.zIndex = it.$store.state.windowData.zIndex;
	it.$store.commit("windowData/setzIndex")
	it.$store.commit("windowData/setOpenId",options.appid)
	
	floderInstance.dom = floderInstance.vm.$el //获取到本实例的dom元素
	document.body.appendChild(floderInstance.dom) // 将dom插入body
	return floderInstance.vm
}
export default floder;
