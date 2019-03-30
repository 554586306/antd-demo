// 引入组件
import contextMenu from './contextMenu.vue'
import directive from './directive';
contextMenu.directive = directive;

contextMenu.install = function(Vue){
	Vue.directive('contextmenu', directive);
	Vue.component('contextMenu', contextMenu)
}
export default contextMenu; // 导出