<template>
  <div class="reservation-container">
    <h1>
      Cours et prestations 2 (work in progress...)
    </h1>
    <Footer class="footer" color="black"></Footer>
  </div>
</template>

<script setup>
import Footer from "@/components/Footer.vue";
</script>

<style lang="scss" scoped>
.reservation-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url("/lessons2.jpeg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  h1 {
    text-align: center;
  }

  .footer {
    z-index: 1;
    position: absolute;
    bottom: 1rem;
    width: 100%;
    height: 3rem;
  }
}
</style>