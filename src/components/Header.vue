<template>
  <div class="container">
    <img src="/logo.jpg" alt="" @click="router.push('/')" />
    <div class="titles">
      <RouterLink to="/qui-suis-je" class="title">Qui suis-je</RouterLink>
      <RouterLink to="/yoga-vinyasa" class="title">Yoga Vinyasa</RouterLink>
      <RouterLink to="/demande-et-reservation" class="title">Demande et réservation</RouterLink>
      <RouterLink to="/contact" class="title">Contact</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, useRouter } from "vue-router";

const router = useRouter();
</script>

<style scoped>
.container {
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 50px;
  margin-top: 15px
}

img {
  height: 100%;
}

.titles {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 20px 50px;
}

.title {
  color: #4e69ef;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 25px;
  cursor: pointer;
  display: inline-block;
  position: relative;
  text-decoration: none;
}

.title::after {
  content: '';
  position: absolute;
  border-radius: 20px;
  height: 2.5px;
  left: 0;
  bottom: 0;
  width: 100%;
  margin-left: 0%;
  transform: scaleX(0);
  background-color: #4e69ef;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.title:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>