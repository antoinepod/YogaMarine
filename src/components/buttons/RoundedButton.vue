<template>
  <a v-if="href" :href="href" :target="target">
    <button>
      <slot></slot>
    </button>
  </a>
  <button v-else>
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  href: {
    type: String,
    required: false
  },
  target: {
    type: String,
    required: false,
    default: ""
  }
});
</script>

<style lang="scss" scoped>
button {
  background-color: #1F6AFD;
  border: 0;
  border-radius: 2em;
  padding: 1vh 2vh;
  color: aliceblue;
  cursor: pointer;
  text-transform: uppercase;
  transition: transform 0.2s ease-out, box-shadow 0.25s ease-out;
  font-family: 'Lovelo';
  font-weight: bold;

  &:hover {
    box-shadow: 0 0.5em 0.5em -0.4em #1F6AFD;
    transform: translateY(-0.2em);
    transition: transform 0.2s ease-out, box-shadow 0.25s ease-out;
  }

  &:active {
    box-shadow: 0 0.5em 0.5em -0.4em #1F6AFD;
    transform: translateY(-0.1em);
    transition: transform 0.2s ease-out, box-shadow 0.25s ease-out;
  }

  a {
    color: white;
    text-decoration: none;
  }
}
</style>