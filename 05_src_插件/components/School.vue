<template>
  <div class="school">
      <h2>学校名称:{{name | mySlice}}</h2>
      <h2>地址 ： {{address}}</h2>
      <button @click="hello">点我测试方法</button>
  </div>
</template>

<script>

export default {
    name: "School",
    data(){
        return {
            name: "iyuhao",
            address: "湖北",
        }
    },

}
</script>

<style scoped>

</style>