<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <!--        通过父组件给子组件绑定一个自定义事件实现：子给父传递数据-->
        <School @yuhao="send"/>
        <School v-on:yuhao="send"/>
        <!--        将click事件换回原生的事件-->
        <School ref="school" @click.native="show"/>

    </div>
</template>

<script>
import School from "@/components/School.vue";
export default {
    name: "App",
    data(){
        return {
            msg: '欢迎宁'
        }
    },
    components: {School},
    methods: {
        send(value){
            this.msg = value
        },
        show(){
            alert("00")
        }
    },
    mounted() {
        setTimeout(() =>{
            // this.msg = this.$refs.school.$on('yuhao',this.send)
            //绑定自定义事件（一次）
            this.msg = this.$refs.school.$once('yuhao',this.send)
        },3000)
    }

}
</script>

<style>

</style>