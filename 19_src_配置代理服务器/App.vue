<template>
    <div id="root">
        <button @click="getStudent">获取学生信息</button>
    </div>
</template>

<script>


import axios from "axios";

export default {
    name: "App",
    methods: {
        getStudent(){
            //与当前服务器端口号一样
            axios.get('http://localhost:8081/h')
                .then(
                    response => {
                        console.log('请求成功', response.data)
                    },
                    error => {
                        console.log('失败',error.message)
                    }
                )
        }
    }
}
</script>

<style>

</style>