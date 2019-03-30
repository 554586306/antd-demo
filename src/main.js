import Vue from 'vue'
import App from './App.vue'
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "./static/css/common.css";
Vue.use(Antd);

import store from  './store/store'

import floder from  './components/system/floder/floder.js'
Vue.prototype.$floder = floder
import contextMenu from  './components/system/contextMenu/contextMenu.js'
Vue.prototype.$contextMenu = contextMenu

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
	store,
}).$mount('#app')
