<template>
  <footer>
    <RouterLink to="/mentions-legales" class="legal">MENTIONS LÉGALES – CGV</RouterLink>
    <p>©2023 YOGAMARINE - Site crée par <a target="_blank" href="https://www.linkedin.com/in/antoine-podvin/">Antoine
        Podvin</a></p>
    <div class="links">
      <a class="mail" target="_blank" href="mailto:contact@yogamarine.fr"><i class="fa fa-envelope"></i>
        contact@yogamarine.fr</a>
      <a class="instagram" target="_blank" href="https://www.instagram.com/_yogamarine_/"><i class="fa fa-instagram"></i>
        _yogamarine_</a>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from "vue-router";

defineProps({
  color: {
    type: String,
    required: false,
    default: "black"
  }
});
</script>

<style lang="scss" scoped>
footer {
  text-align: center;
  color: v-bind(color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  .legal {
    width: 33%;
    font-weight: bold;
    text-decoration: none;
    color: v-bind(color);
  }

  .legal:hover {
    color: var(--blue-logo);
    text-decoration: underline;
  }

  p {
    margin: 0;
    font-size: 1em;
    width: 33%;

    a {
      color: v-bind(color);
    }

    a:hover {
      color: var(--blue-logo);
    }
  }

  .links {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 33%;

    .mail {
      color: v-bind(color);
      text-decoration: none;
    }

    .mail:hover {
      color: #1F88E5;
      text-decoration: underline;
    }

    .instagram {
      color: v-bind(color);
      text-decoration: none;
    }

    .instagram:hover {
      color: #833AB4;
      text-decoration: underline;
    }
  }
}
</style>