//求和相关的配置
const countOptions = {
    namespaced: true,
    state: {
        //求和
        sum: 0,
    },
    actions: {
        increment(context, value) {
            context.commit('INCREMENT', value)
        },
        decrement(context, value) {
            context.commit('DECREMENT', value)
        },
        incrementOdd(context, value) {
            if (context.state.num % 2) {
                context.commit('DECREMENT', value)
            }
        },
        incrementWait(context, value) {
            setTimeout(() => {
                context.commit('INCREMENT', value)
            }, 300)
        }
    },
    mutations: {
        INCREMENT(state, value) {
            state.sum += value
        },
        DECREMENT(state, value) {
            state.sum -= value
        },
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}

export default countOptions