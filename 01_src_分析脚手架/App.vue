<template>
   <div>
       <img src="./assets/logo.png" alt="logo">
       <School></School>
   </div>
</template>

<script>
//引入组件
import School from "./components/School";

export default {
  name: "App",
  components: {
    School
  }
}
</script>

<style scoped>

</style>