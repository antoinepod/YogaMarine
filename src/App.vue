<template>
  <Header />
  <div class="container">
    <RouterView />
  </div>
  <div class="footer-container">
    <Footer />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<style scoped>
/*.container {*/
/*  background-image: url("/wave-line.svg");*/
/*  height: 100vh;*/
/*  width: 100vw;*/
/*}*/

.footer-container {
  height: 40px;
}
</style>