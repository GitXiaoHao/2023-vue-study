<template>
  <div>
      <button @click="isShow = !isShow">显示/隐藏</button>
      <transition name="h" appear>
          <h1 v-show="isShow">你好啊</h1>
      </transition>
  </div>
</template>

<script>
export default {
    name: "Test",
    data(){
        return {
            isShow: this
        }
    }
}
</script>

<style scoped>
  h1{
      background-color: #42b983;
  }
  .h-enter-active{
      animation: yuhao 1s;
  }
  .h-leave-active{
      animation: yuhao 1s reverse;
  }
  @keyframes yuhao {
      from{
          transform: translateX(-100%);
      }
      to{
          transform: translateX(0px);
      }
  }
</style>