import axios from "axios";
import {error} from "vue-resource/src/util";

const personOptions = {
    namespaced: true,
    state: {
        persons: [
            {
                id: '001',
                name: '张三'
            }
        ],
        personIntroduce: ''
    },
    actions: {
        addPersonServer(context){
            axios.get('http://121.36.38.232/api/hitokoto/i')
                .then(
                    response => {
                        context.state.personIntroduce = response.data.data
                    },
                    error => {
                        console.log(error.message)
                    }
                )
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            state.persons.unshift(value)
        }
    }
}
export default personOptions