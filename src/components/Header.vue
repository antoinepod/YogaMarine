<template>
  <div class="header-container">
    <div class="top-header">
      <p>Bienvenue dans cet univers personnel et professionnel de bien être.</p>
    </div>
    <div class="nav-container">
      <a href="#accueil">
        <img src="/logo.png" alt="" />
      </a>
      <div class="titles-container">
        <a v-for="page in pages" :href="page.href" :class="isActive(page.href)">{{ page.title }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function isActive(text) {
  if (text === router.currentRoute.value.hash)
    return 'active';
  return 'inactive';
};

const pages = [
  { href: '#qui-suis-je', title: "Qui suis-je" },
  { href: '#yoga-vinyasa', title: "Yoga Vinyasa" },
  { href: '#cours-et-prestations', title: "Cours et prestations" },
  { href: '#contact', title: "Contact" }
]
</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  flex-direction: column;
  justify-content: center;

  .top-header {
    background-color: var(--blue-logo);
    height: 4vh;
    @media screen and (max-width: 768px) {
      height: 4vh;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    padding-top: 2vh;
    width: 100%;
    

    p {
      @media screen and (max-width: 768px) {
        font-size: 0.8rem;
      }
      text-align: center;
    }
  }

  .nav-container {
    height: 15vh;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 768px) {
      height: 10vh;
      margin-top: -1rem;
    }


    button {
      background-color: transparent;
      border: none;
      outline: none;
    }

    img {
      height: 18vh;
      @media screen and (max-width: 768px) {
        height: 10vh;
      }
      cursor: pointer;
      transition: box-shadow 0.2s ease-out;
      border-radius: 8px;
      margin: 4vh 0 0 4vw;
      @media screen and (max-width: 768px) {
        margin: 0 0 0 2;
      }

      &:hover,
      &:focus {
        box-shadow: 0.5em 0.5em 0.5em -0.4em var(--blue-logo);
        transition: box-shadow 0.2s ease-out;
      }
    }

    .titles-container {
      display: flex;
      justify-content: space-between;
      width: 80%;

      a {
        color: var(--blue-buttons);
        text-transform: uppercase;
        font-weight: bold;
        font-size: 3vh;
        @media screen and (max-width: 768px) {
          font-size: 1vh;
        }
        cursor: pointer;
        display: inline-block;
        position: relative;
        text-decoration: none;
      }

      a::after {
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

      a:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }

      .active {
        color: white;
      }
    }
  }
}
</style>