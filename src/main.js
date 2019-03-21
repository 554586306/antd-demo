import Vue from 'vue'
import App from './App.vue'
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import store from  './store/store'
Vue.use(Antd);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
	store,
}).$mount('#app')
