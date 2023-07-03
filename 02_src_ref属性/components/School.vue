<template>
  <div class="school">
      <h2>学校名称:{{name}}</h2>
      <h2>地址 ： {{address}}</h2>
  </div>
</template>

<script>
export default {
    name: "School",
    data(){
        return {
            name: 'iyuhao',
            address: '湖北'
        }
    }
}
</script>

<style scoped>

</style>