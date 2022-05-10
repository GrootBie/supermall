<template>
  <div id="tab-bar">
    <slot></slot>
  </div>

</template>

<script>
// import TabBarItem from "@/components/tabbaritem";
export default {
  name: "TabBar",
  // components:[TabBarItem]
}

</script>

<style >
#tab-bar{
  background-color: #f6f6f6;
  display: flex;
  width: 100%;
  position: fixed;
  bottom: 0;
}

</style>