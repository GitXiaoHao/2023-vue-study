export default {
    install(Vue,options){
        console.log("install")
        //全局过滤器
        Vue.filter("mySlice",function (value) {
            return value.slice(0,4);
        })
        //全局指令
        Vue.directive('fbind',{
            //当指令与元素成功绑定时调用
            bind(element,binding){
                element.value = binding.value;
            },
            //指令所在元素被插入页面时调用
            inserted(element,binding){
                element.focus();
            },
            //指令所在的模板被重新解析时
            update(element,binding){
                element.value = binding.value;
            }
        })
        //定义方法
        Vue.prototype.hello = () => alert('你好')
    }
}