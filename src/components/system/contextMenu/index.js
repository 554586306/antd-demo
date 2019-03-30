// 引入组件
import contextMenu from './contextMenu.vue'
import directive from './directive';
// import Vue from 'vue';

// Vue.directive('contextmenu', directive);

// install 是默认的方法。当外界在 use 这个组件的时候，就会调用本身的 install 方法，同时传一个 Vue 这个类的参数。
contextMenu.install = function(Vue){
	Vue.directive('contextmenu', directive);
	Vue.component('contextMenu', contextMenu)
}
contextMenu.directive = directive;

export default contextMenu; // 导出