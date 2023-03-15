<template>
  <div class="container">
    <RouterLink to="/" class="image"><img src="/logo.png" alt=""/></RouterLink>
    <RouterLink to="/qui-suis-je" class="title">Qui suis-je</RouterLink>
    <RouterLink to="/yoga-vinyasa" class="title">Yoga Vinyasa</RouterLink>
    <RouterLink to="/demande-et-reservation" class="title">Demande et réservation</RouterLink>
    <RouterLink to="/contact" class="title">Contact</RouterLink>
  </div>
</template>

<script setup>
</script>

<style scoped>
.container {
  height: 13vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 50px 15px;
}

.image {
  height: 18vh;
  cursor: pointer;
  transition: .2s ease-in-out;
  border-radius: 10px;
  box-shadow: -6px -6px 14px rgba(255, 255, 255, .7),
  -6px -6px 10px rgba(255, 255, 255, .5),
  6px 6px 8px rgba(255, 255, 255, .075),
  6px 6px 10px rgba(0, 0, 0, .15);
}

img {
  height: 100%;
}

.image:hover {
  box-shadow: -2px -2px 6px rgba(255, 255, 255, .6),
  -2px -2px 4px rgba(255, 255, 255, .4),
  2px 2px 2px rgba(255, 255, 255, .05),
  2px 2px 4px rgba(0, 0, 0, .1);
}

.image:active {
  box-shadow: inset -2px -2px 6px rgba(255, 255, 255, .7),
  inset -2px -2px 4px rgba(255, 255, 255, .5),
  inset 2px 2px 2px rgba(255, 255, 255, .075),
  inset 2px 2px 4px rgba(0, 0, 0, .15);
}

.title {
  height: 8vh;
  color: #4e69ef;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 25px;
  cursor: pointer;
  text-decoration: none;
  transition: .2s ease-in-out;
  border-radius: 10px;
  padding: 15px;
  box-shadow: -6px -6px 14px rgba(255, 255, 255, .7),
  -6px -6px 10px rgba(255, 255, 255, .5),
  6px 6px 8px rgba(255, 255, 255, .075),
  6px 6px 10px rgba(0, 0, 0, .15);
}

.title:hover {
  box-shadow: -2px -2px 6px rgba(255, 255, 255, .6),
  -2px -2px 4px rgba(255, 255, 255, .4),
  2px 2px 2px rgba(255, 255, 255, .05),
  2px 2px 4px rgba(0, 0, 0, .1);
}

.title:active {
  box-shadow: inset -2px -2px 6px rgba(255, 255, 255, .7),
  inset -2px -2px 4px rgba(255, 255, 255, .5),
  inset 2px 2px 2px rgba(255, 255, 255, .075),
  inset 2px 2px 4px rgba(0, 0, 0, .15);
}

.router-link-active {
  box-shadow: -2px -2px 6px rgba(255, 255, 255, .6),
  -2px -2px 4px rgba(255, 255, 255, .4),
  2px 2px 2px rgba(255, 255, 255, .05),
  2px 2px 4px rgba(0, 0, 0, .1);
}

</style>