import Vue from 'vue'
const contextMenuConstructor = Vue.extend(require('./contextMenu.vue').default) // 直接将Vue组件作为Vue.extend的参数

const contextMenu = (options) => {
	const contextMenuInstance = new contextMenuConstructor({ // 实例化一个带有content内容的Notice
		data: options //在这里将你传过来的参数匹配到contextMenuInstance.vue组件的data
	})
	contextMenuInstance.top = options.e.y
	contextMenuInstance.left = options.e.x
	contextMenuInstance.vm = contextMenuInstance.$mount(); // 挂载但是并未插入dom，是一个完整的Vue实例
	contextMenuInstance.vm.visible = true //这里修改contextMenuInstance.vue数据中的visible,这样contextMenuInstance组件就显示出来
	contextMenuInstance.dom = contextMenuInstance.vm.$el //获取到本实例的dom元素
	
	document.body.appendChild(contextMenuInstance.dom) // 将dom插入body
	return contextMenuInstance.vm
}
export default contextMenu;
