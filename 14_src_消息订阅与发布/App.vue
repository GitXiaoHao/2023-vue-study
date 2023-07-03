<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
          <!--        将click事件换回原生的事件-->
        <School ref="school" @click.native="show"/>
        <Student/>
    </div>
</template>

<script>
import School from "@/components/School.vue";
import Student from "@/components/Student.vue";
export default {
    name: "App",
    data(){
        return {
            msg: '欢迎宁'
        }
    },
    components: {Student, School},
    methods: {
        send(value){
            this.msg = value
        },
        show(){
            alert("00")
        }
    },
    mounted() {
        /*setTimeout(() =>{
            // this.msg = this.$refs.school.$on('yuhao',this.send)
            //绑定自定义事件（一次）
            this.msg = this.$refs.school.$once('yuhao',this.send)
        },3000)*/
    }

}
</script>

<style>

</style>