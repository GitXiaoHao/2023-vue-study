<template>
  <div>
      <h1 v-text="msg" ref="title"></h1>
      <School name="李四"/>
      <School name="222"/>
      <School/>

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

}
</script>

<style scoped>

</style>