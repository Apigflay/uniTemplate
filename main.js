import Vue from 'vue'
import App from './App'
import store from './store';

// 在main.js中注册全局组件
import toast from './components/toast/toast.vue'
Vue.component('toast',toast)
//挂在到Vue原型链上
// Vue.prototype.$store = store;
//是否显示加载中 的方法 调用store中的mutations方法
function loading(tf){
    if(tf){
        store.commit("set_alltoast",tf)
    }else{
        store.commit("set_alltoast")
    }
}

import Global_ from './lib/js/GlobalObj.js'   //全局对象
Vue.prototype.GLOBAL = Global_; //添加Global_到Vue的原型对象上
import Language_ from './lib/js/LanguageObj.js'   //全局对象
Vue.prototype.Language = Language_; //添加Global_到Vue的原型对象上
// 以下是注册组件的方法
// import TagBar from './components/tabbar/tabbar.vue';
// Vue.component("TagBar",TagBar); // 全局注册组件
// import InputFile from './components/inputfile/inputfile.vue';
// Vue.component("InputFile",InputFile); // 全局注册组件

//也挂在到原型链上 方便在每个页面中  使用 this.$loading()  去显示加载中
Vue.prototype.$loading = loading;

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	store//挂载store
})
app.$mount()
