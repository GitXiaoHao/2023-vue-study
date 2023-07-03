<template>
  <div>
      <button @click="isShow = !isShow">显示/隐藏</button>
      <transition name="h" appear>
          <h1 v-show="isShow">你好啊</h1>
      </transition>
      <transition-group name="h1" appear>
          <h1 v-show="isShow" key="1">你好啊</h1>
          <h1 v-show="isShow" key="2">你好啊!!</h1>
      </transition-group>
  </div>
</template>

<script>
export default {
    name: "TestTwo",
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
  /*进入的起点 离开的终点*/
  .h-enter, .h-leave-to{
      transform: translateX(-100%);
  }
  .h-enter-active .h-leave-active{
      transition: 0.5s linear;
  }
  /*进入的终点  离开的起点*/
  .h-enter-to, .h-leave{
      transform: translateX(0px);
  }
</style>