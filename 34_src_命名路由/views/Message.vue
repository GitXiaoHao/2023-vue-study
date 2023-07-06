<template>
  <div>
    <ul>
      <li v-for="item in messageList" :key="item.id">
<!--        跳转路由并携带query参数 字符串写法-->
<!--        <router-link :to="`/home/message/detail?id=${item.id}&title=${item.title}`">{{item.title}}</router-link>-->
<!--        to的对象写法-->
        <router-link :to="{
          name: 'Detail',
          query: {
            id: item.id,
            title: item.title
          }
        }">
          {{item.title}}
        </router-link>

      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        {id:'001',title:'消息001'},
        {id:'002',title:'消息002'},
        {id:'003',title:'消息003'},
      ]
    }
  }
}
</script>

<style scoped>

</style>