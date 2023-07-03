//
// 该文件用于创建vuex中最为核心的store
//


import Vue from "vue";
import VuexEsm from "vuex";

Vue.use(VuexEsm)

//准备actions 用于响应组件的动作
const actions = {
    increment(context,value){
        context.commit('INCREMENT',value)
    },
    decrement(context,value){
        context.commit('DECREMENT',value)
    },
    incrementOdd(context, value){
        if (context.state.num % 2) {
            context.commit('DECREMENT',value)
        }
    },
    incrementWait(context ,value){
        setTimeout(() => {
            context.commit('INCREMENT',value)
        }, 300)
    }
}

//准备mutations 用于操作数据
const mutations = {
    INCREMENT(state, value) {
        state.sum += value
    },
    DECREMENT(state, value) {
        state.sum -= value
    },
    ADD_PERSON(state, value){
        state.persons.unshift(value)
    }
}

//准备state 用于存储数据
const state = {
    //求和
    sum: 0,
    persons: [
        {
            id: '001',
            name: '张三'
        }
    ]
}

//准备getters 用于讲state中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum * 10
    }
}

//创建store
const store = new VuexEsm.Store({
    actions,
    mutations,
    state,
    getters
})

//导出store
export default store