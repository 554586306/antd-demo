import Vue from 'vue'
import store from '../../../store/store.js'
const floderConstructor = Vue.extend(require('./floder.vue').default) // 直接将Vue组件作为Vue.extend的参数
const floder = (options) => {
	if(!options.appid){  // 如果新文件夹没有appid
		options.appid = store.state.windowData.id
		store.commit("windowData/setId")
	}
	store.commit("windowData/setActiveApp",options.appid)
	var obj = store.state.windowData.openApp
	for(var i=0;i<obj.length;i++) {
		if(obj[i].appid == options.appid) return;
	}
	store.commit("windowData/setOpenApp",options)
	
	const floderInstance = new floderConstructor({ // 实例化一个带有content内容的Notice
		data: options //在这里将你传过来的参数匹配到floder.vue组件的data
	})
	floderInstance.appid = options.appid
	floderInstance.vm = floderInstance.$mount(); // 挂载但是并未插入dom，是一个完整的Vue实例
	floderInstance.vm.visible = true //这里修改message.vue数据中的visible,这样message组件就显示出来
	
	floderInstance.dom = floderInstance.vm.$el //获取到本实例的dom元素
	document.getElementById("app").appendChild(floderInstance.dom) // 将dom插入body
	return floderInstance.vm
}
export default floder;
