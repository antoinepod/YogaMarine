<script setup>
import {defineProps} from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true
  }
});
</script>

<template>
  <button>{{props.name}}</button>
</template>

<style scoped>
button {
  background-color: #1F6AFD;
  border: 0;
  border-radius: 20px;
  padding: 12px;
  color: aliceblue;
  cursor: pointer;
  text-transform: uppercase;
  transition: transform 0.2s ease-out, box-shadow 0.25s ease-out;
}

button:hover,
button:focus {
  box-shadow: 0 0.5em 0.5em -0.4em #1F6AFD;
  transform: translateY(-0.2em);
  transition: transform 0.2s ease-out, box-shadow 0.25s ease-out;
}
</style>