<template>
  <div class="top-header">
    <p>Bienvenue dans cet univers personel et professionnel de bien être.</p>
  </div>
  <div class="container">
    <button>
      <img src="/logo.png" alt="" @click="router.push('/')"/>
    </button>
    <div class="titles-container">
      <RouterLink to="/qui-suis-je" class="title">Qui suis-je</RouterLink>
      <RouterLink to="/yoga-vinyasa" class="title">Yoga Vinyasa</RouterLink>
      <RouterLink to="/demande-et-reservation" class="title">Demande et réservation</RouterLink>
      <RouterLink to="/contact" class="title">Contact</RouterLink>
    </div>
  </div>
</template>

<script setup>
import {RouterLink, useRouter} from "vue-router";

const router = useRouter();
</script>

<style scoped>
.top-header {
  background-color: #1F6AFD;
  height: 3vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  /* font-weight: bold; */
}

.container {
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 50px 0;
}
button {
  background-color: transparent;
  border: none;
  outline: none;
}

img {
  height: 18vh;
  cursor: pointer;
  transition: box-shadow 0.2s ease-out;
  border-radius: 8px;
}

img:hover,
img:focus {
  box-shadow: 0.5em 0.5em 0.5em -0.4em #1F6AFD;
  transition: box-shadow 0.2s ease-out;
}

.titles-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 20px 50px;
}

.title {
  color: #085BF8;
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
  margin-left: 0;
  transform: scaleX(0);
  background-color: currentColor;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.title:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.router-link-active {
  color: #0000E2;
}

</style>