<template>
  <div class="school">
      <h2>学校名称:{{defaultName}}</h2>
      <h2>地址 ： {{address}}</h2>
  </div>
</template>

<script>
export default {
    name: "School",
    props: {
        name: {
            default: "iyuhao",
            type: String,
        },
        address: {
            type: String,
            required: true
        }
    },
    data(){
        return {
            defaultName: this.name
        }
    },
}
</script>

<style scoped>

</style>