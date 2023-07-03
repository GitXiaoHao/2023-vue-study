<template>
  <div class="school">
      <h2>学校名称:{{name}}</h2>
      <h2>地址 ： {{address}}</h2>
      <button @click="sendSchoolName">点我传递学校名称</button>
      <button @click="unbind">解绑事件</button>
  </div>
</template>

<script>

import pubsub from "pubsub-js";

export default {
    name: "School",
    data(){
        return {
            name: "iyuhao",
            address: "湖北",
        }
    },
    methods: {
        sendSchoolName(){
            //触发组件实例身上的事件
            this.$emit('yuhao')
        },
        unbind(){
            this.$off(['yuhao'])
            //解绑所有自定义事件
            // this.$off()
        }
    },
    mounted() {
        this.pubId = pubsub.subscribe('hello',function (msg,data) {
            console.log('有人发布了hello消息',data)
        })
    },
    beforeDestroy() {
        pubsub.unsubscribe(this.pubId)
    }

}
</script>

<style scoped>

</style>