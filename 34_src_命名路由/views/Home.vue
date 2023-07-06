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
      <router-view></router-view>
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