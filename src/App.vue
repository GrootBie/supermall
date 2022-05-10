<template>
<main-tab-bar></main-tab-bar>
  <router-view></router-view>
</template>

<script>

  import MainTabBar from "@/components/content/maintabbar/MainTabBar";
  export default {
    name: "App",
    components :{MainTabBar},

}
</script>

<style scoped>
 @import "./assets/css/base.css";
</style>
