/*
该文件是整个项目的入口文件
 */
//引入vue
import Vue from 'vue'
//引入app组件 是所有组件的父组件
import App from './App.vue'
//关闭vue的生产提示
Vue.config.productionTip = false
/*
  关于不同版本的vue
    1. vue.js与vue.runtime.xxx.js的区别：
      vue.js 是完整版的vue 包含：核心功能 + 模板解析器
      vue.runtime.xxx.js 是运行版的vue 只包含：核心功能  没有模板解析器
    2. 因为vue.runtime.xxx.js没有模板解析器 所有不能使用template配置项需要使用
    render函数接收到createElement函数去指定具体内容
 */
//创建vue实例
new Vue({
  //将app组件放入容器中
  render: h => h(App),
}).$mount('#app')
