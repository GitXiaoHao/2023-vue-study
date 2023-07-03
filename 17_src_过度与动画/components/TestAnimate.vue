<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition name="animate__animated animate__bounce"
                    enter-active-class="animate__fadeInRightBig"
                    leave-active-class="animate__fadeOutLeftBig"
                    appear>
            <h1 v-show="isShow">你好啊</h1>
        </transition>
        <transition-group appear
                          name="animate__animated animate__bounce"
                          enter-active-class="animate__fadeInUp"
                          leave-active-class="animate__fadeOutUp"
        >
            <h1 v-show="isShow" key="1">你好啊</h1>
            <h1 v-show="isShow" key="2">你好啊!!</h1>
        </transition-group>
    </div>
</template>

<script>
import 'animate.css';

export default {
    name: "TestAnimate",
    data() {
        return {
            isShow: this
        }
    }
}
</script>

<style scoped>
h1 {
    background-color: #42b983;

}
</style>