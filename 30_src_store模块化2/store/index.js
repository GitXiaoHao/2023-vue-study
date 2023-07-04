//
// 该文件用于创建vuex中最为核心的store
//


import Vue from "vue";
import VuexEsm from "vuex";
import countOptions from "@/store/modules/count";
import personOptions from "@/store/modules/person";

Vue.use(VuexEsm)


//创建store
const store = new VuexEsm.Store({
    modules: {
        countOptions,
        personOptions
    }
})

//导出store
export default store