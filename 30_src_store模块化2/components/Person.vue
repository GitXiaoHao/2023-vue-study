<template>
  <div>
    <h1>人员列表</h1>
    <h3>count组件的求和为{{ sum }}</h3>
    <input type="text" name="" id="" placeholder="请输入名字" v-model="name">
    <button @click="add" @keyup.enter="add">添加</button>
    <ul>
      <li v-for="person in persons" :key="person.id">{{ person.name }}</li>
    </ul>
    <button @click="addPersonServer">获取数据</button>
    <h3>{{personIntroduce}}</h3>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";
import {nanoid} from "nanoid";

export default {
  name: "Person",
  data() {
    return {
      name: ''
    }
  },
  methods: {
    add() {
      const personObj = {
        id: nanoid(),
        name: this.name
      }
      // this.ADD_PERSON(personObj)
      this.$store.commit('countOptions/ADD_PERSON', personObj)
      this.name = ''
    },
    ...mapMutations('countOptions', ['ADD_PERSON']),
    ...mapActions('personOptions',['addPersonServer'])
  },
  computed: {
    ...mapState('personOptions', ['persons','personIntroduce']),
    ...mapState('countOptions', ['sum'])
  }
}
</script>

<style scoped>

</style>