<template>
  <ul>
    <li :style="{opacity}">欢迎学习Vue</li>
    <li>news001 <input type="text"></li>
    <li>news002 <input type="text"></li>
    <li>news003 <input type="text"></li>
    <li>news004 <input type="text"></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  data(){
    return {
      opacity: 1
    }
  },
  activated() {
    this.timer = setInterval(() => {
      this.opacity -= 0.01
      if(this.opacity <= 0){
        this.opacity = 1
      }
    },100)
  },
  deactivated() {
    clearInterval(this.timer)
  }
}
</script>

<style scoped>

</style>