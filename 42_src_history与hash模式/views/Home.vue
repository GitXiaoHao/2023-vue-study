<template>
  <div>
    <h2>
      我是Home的内容
    </h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link to="/home/news" active-class="active" class="list-group-item">News</router-link>
        </li>
        <li>
          <router-link to="/home/message" active-class="active" class="list-group-item">Message</router-link>
        </li>
      </ul>
<!--      保持活跃-->
      <keep-alive include="News">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>