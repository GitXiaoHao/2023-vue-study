<template>
    <div>
        <h1>当前求和为:{{ $store.state.sum }}</h1>
        <h3>求和放大10倍为：{{ $store.getters.bigSum }}</h3>
        <select v-model.number="num">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前为奇数+</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
export default {
    name: "Count",
    data() {
        return {

            //用户选择数字
            num: 1
        }
    },
    methods: {
        increment() {
            this.$store.dispatch('increment', this.num)
        },
        decrement() {
            this.$store.dispatch('decrement', this.num)
        },
        incrementOdd() {
            this.$store.dispatch('incrementOdd', this.num)
        },
        incrementWait() {
            this.$store.dispatch('incrementWait', this.num)
        },
    }
}
</script>

<style scoped>
button {
    margin-left: 5px;
}
</style>