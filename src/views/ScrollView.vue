<template>
  <div class="header-container">
    <Header></Header>
  </div>
  <div class="scroll-container" @scroll.passive="onScroll()" ref="scroll">
    <HomeView id="accueil" class="section home" />
    <AboutMeView id="qui-suis-je" class="section about-me" />
    <YogaVinyasaView id="yoga-vinyasa" class="section yoga-vinyasa" />
    <LessonsView id="cours-et-prestations" class="section lessons" />
    <LessonsView2 id="cours-et-prestations2" class="section lessons" />
    <ContactView id="contact" class="section contact" />
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import HomeView from "@/views/scroll/HomeView.vue";
import AboutMeView from "@/views/scroll/AboutMeView.vue";
import YogaVinyasaView from "@/views/scroll/YogaVinyasaView.vue";
import LessonsView from "@/views/scroll/LessonsView.vue";
import ContactView from "@/views/scroll/ContactView.vue";
import LessonsView2 from "@/views/scroll/LessonsView2.vue";

import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const scroll = ref(null);

const pages = [
  'accueil',
  'qui-suis-je',
  'yoga-vinyasa',
  'cours-et-prestations',
  'cours-et-prestations',
  'contact'
]

function onScroll() {
  const page = Math.round(pages.length * scroll.value.scrollTop / scroll.value.scrollHeight);
  console.log(page, pages[page]);
  router.push({ name: "Scroll", hash: `#${pages[page]}` });
}

onBeforeMount(() => {
  router.push({ name: "Scroll", hash: "#accueil" });
});
</script>

<style lang="scss" scoped>
.header-container {
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100vw;
}

.scroll-container {
  top: 4vh;
  width: 100vw;
  height: 96vh;
  scroll-behavior: smooth;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  .section {
    width: 100%;
    height: 100%;
    scroll-snap-align: start;
  }
}
</style>