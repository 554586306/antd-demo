import Vue from 'vue'
import store from '../../../store/store.js'
const floderConstructor = Vue.extend(require('./floder.vue').default) // 直接将Vue组件作为Vue.extend的参数

const floder = (options,extra) => {
	
	var obj = store.state.windowData.openApp
	var flag = false;
	for(var i=0;i<obj.length;i++) {
		if(obj[i].appid == options.appid) {
			flag = true;
			break;
		}
	}
	
	if(flag){ // 存在
		store.commit("windowData/setActiveApp",options.appid) // 跳到最前面
		store.commit("windowData/setVisibleAlways", options.appid)  // 显示
		return;
	}else{ // 不存在
		if(!options.appid){  // 如果新文件夹没有appid
			options.appid = store.state.windowData.id
			store.commit("windowData/setId")
		}
		store.commit("windowData/setVisibleAlways", options.appid)  // 显示
		store.commit("windowData/setOpenApp",options)  // 创建
		store.commit("windowData/setActiveApp",options.appid) // 跳到最前面
	}
	
	const floderInstance = new floderConstructor({ // 实例化一个带有content内容的Notice
		store,
		data: options //在这里将你传过来的参数匹配到floder.vue组件的data
	})
	
	// 设置参数
	floderInstance.appid = options.appid
	floderInstance.top = store.state.windowData.beginTop;
	floderInstance.left = store.state.windowData.beginLeft;
	store.commit("windowData/setPosition",{width:500,height:400})
	
	store.commit("windowData/setzIndex")
	floderInstance.zIndex = store.state.windowData.zIndex;
	for(var j in extra){
		floderInstance[j] = extra[j]
	}
	
	floderInstance.vm = floderInstance.$mount(); // 挂载但是并未插入dom，是一个完整的Vue实例
	floderInstance.vm.visible = true //这里修改floder.vue数据中的visible,这样floder组件就显示出来
	
	floderInstance.dom = floderInstance.vm.$el //获取到本实例的dom元素
	document.getElementById("app").appendChild(floderInstance.dom) // 将dom插入body
	return floderInstance.vm
}
export default floder;
