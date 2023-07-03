<template>
  <div>
      <h1 v-text="msg" ref="title"></h1>
      <button @click="showDom">点我输出</button>
      <School/>
      <School/>
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
    methods: {
        showDom(){
            console.log(this.$refs.title)
        }
    }
}
</script>

<style scoped>

</style>