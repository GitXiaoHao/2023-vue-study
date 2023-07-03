<template>
  <div class="school">
      <h2 @click="showName">学校名称:{{name}}</h2>
      <h2>地址 ： {{address}}</h2>
  </div>
</template>

<script>
//引入一个混合
import {mixin} from '@/mixin'

export default {
    name: "School",
    data(){
        return {
            name: "iyuhao",
            address: "湖北",
        }
    },
    mixins: [mixin]
}
</script>

<style scoped>

</style>