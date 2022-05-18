<template><div>

<!--  <router-view></router-view>-->


<router-view v-slot="{ Component }" >
  <keep-alive include="Home">
    <component :is="Component"/>
  </keep-alive>
</router-view>
    </div>
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
