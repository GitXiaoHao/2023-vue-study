<template>
    <div>
        <h1>当前求和为:{{ sum }}</h1>
        <h3>求和放大10倍为：{{ bigSum }}</h3>
        <select v-model.number="num">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="INCREMENT(num)">+</button>
        <button @click="DECREMENT(num)">-</button>
        <button @click="incrementOdd(num)">当前为奇数+</button>
        <button @click="incrementWait(num)">等一等再加</button>
        <h3>下方组件的总人数：{{persons.length}}</h3>
    </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
    name: "Count",
    data() {
        return {
            //用户选择数字
            num: 1
        }
    },
    computed: {
        //借助mapState生成计算属性，从state中读取数据
        // ...mapState({sum: 'sum'}),
        //简写形式
        ...mapState(['sum','persons']),
        //借助mapGetters生成计算属性，从getters中读取数据
        ...mapGetters(['bigSum'])
    },
    methods: {
        ...mapMutations(['INCREMENT','DECREMENT']),
        //借助mapActions生成对应的方法，方法会调用dispatch联系actions
        ...mapActions(['incrementOdd','incrementWait'])
    }
}
</script>

<style scoped>
button {
    margin-left: 5px;
}
</style>