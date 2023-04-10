<template>
  <div class="container">
    <Header class="header"/>
    <RouterView class="router"/>
    <Footer class="footer"/>
  </div>
</template>

<script setup>
import {RouterView} from "vue-router";

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<style scoped>
.container {
  margin: 0;
  /* background-color: brown; */
}

.header {
  height: 18vh;
  /* background-color: green; */
}

.router {
  min-height: 70vh;
  /* background-color: red; */
}

.footer {
  height: 10vh;
  position: relative;
  bottom: 0;
  width: 100%;
  /* background-color: yellow; */
}
</style>