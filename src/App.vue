<template>
  <body>
    <RouterView class="router" />
  </body>
</template>

<script setup>
import { RouterView } from "vue-router";
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  .router {
    width: 100vw;
    height: 96vh;
    margin: 0;
    padding: 0;
  }
}
</style>