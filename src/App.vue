<template>
  <body>
    <div class="header-container">
      <Header></Header>
    </div>

    <div class="scroll-container">
      <RouterView class="router" />
    </div>
  </body>
</template>

<script setup>
import { RouterView } from "vue-router";

import Header from "@/components/Header.vue";
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
}

.header-container {
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100vw;
}

.router {
  width: 100vw;
  height: 96vh;
  margin: 0;
  padding: 0;
}
</style>