import Vue from 'vue'
import App from './App.vue'
import vueResourceEsm from "vue-resource";
//引入插件
// import plugins from "@/plugins";
Vue.config.productionTip = false
//使用插件
// Vue.use(plugins)
Vue.use(vueResourceEsm)
new Vue({
    render: h => h(App),
    beforeCreate() {
        //安装全局事件总线
        Vue.prototype.$bus = this
    }
}).$mount('#app')