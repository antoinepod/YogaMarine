<template>
  <div class="container">
    <Header/>
    <RouterView/>
    <div class="footer-container">
      <Footer/>
    </div>
  </div>
</template>

<script setup>
import {RouterView} from "vue-router";

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<style scoped>
.container {
  /*background-color: red;*/
  /*margin: 0;*/
  /*padding: 0;*/
}

.footer-container {
  height: 40px;
}
</style>