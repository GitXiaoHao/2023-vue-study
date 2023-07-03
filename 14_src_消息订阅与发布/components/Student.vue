<template>
    <div class="school">
        <h2>学生名称:{{name}}</h2>
        <h2>地址 ： {{address}}</h2>
        <button @click="sendStuName">把学生名给School组件</button>
    </div>
</template>

<script>
import pubsub from "pubsub-js";

export default {
    name: "Student",
    data(){
        return {
            name: 'yuhao',
            address: 'hubei'
        }
    },
    methods: {
        sendStuName(){
            pubsub.publish('hello',this.name)
        }
    }
}
</script>

<style scoped>

</style>