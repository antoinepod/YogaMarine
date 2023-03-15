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
  background-color: #4e69ef;
  border: 1px solid #4e69ef;
  border-radius: 10px;
  padding: 12px;
  color: aliceblue;
  cursor: pointer;
  text-transform: uppercase;
  transition: .2s ease-in-out;
  box-shadow: -6px -6px 14px rgba(255, 255, 255, .7),
  -6px -6px 10px rgba(255, 255, 255, .5),
  6px 6px 8px rgba(255, 255, 255, .075),
  6px 6px 10px rgba(0, 0, 0, .15);
}

button:hover {
  box-shadow: -2px -2px 6px rgba(255, 255, 255, .6),
  -2px -2px 4px rgba(255, 255, 255, .4),
  2px 2px 2px rgba(255, 255, 255, .05),
  2px 2px 4px rgba(0, 0, 0, .1);
}

button:active {
  box-shadow: inset -2px -2px 6px rgba(255, 255, 255, .7),
  inset -2px -2px 4px rgba(255, 255, 255, .5),
  inset 2px 2px 2px rgba(255, 255, 255, .075),
  inset 2px 2px 4px rgba(0, 0, 0, .15);
}
</style>