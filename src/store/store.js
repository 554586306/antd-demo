import Vue from 'vue'
import Vuex from 'vuex'
import windowData from './windowData'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        windowData: windowData,
    }
})