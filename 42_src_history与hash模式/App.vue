<template>

  <div class="container">
    <div class="row">
      <Banner/>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
<!--          原始使用页面跳转-->
<!--          <a class="list-group-item active">About</a>-->
<!--          <a class="list-group-item">Home</a>-->
          <router-link to="/about" class="list-group-item"  active-class="active">About</router-link>
          <router-link to="/home" class="list-group-item" active-class="active">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
<!--            指定组件的呈现位置-->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>



import Banner from "@/components/Banner";
export default {
  name: "App",
  components: {Banner},
  data() {
    return {}
  }
}
</script>

<style>

</style>