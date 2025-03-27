<script setup>
//commenting here so I dont forget later but the plan is basically to
//feed in the relevant data to the order item which will handle sides/toppings
//and the trash icon etc, then report updates to a function in menuview
//that will update the order array
import { defineProps } from "vue";
defineProps(["name", "price", "index"]);
</script>

<template>
  <div class="item">
    {{ name }}
    <button @click="$emit('deleteorder', index)">delete item</button>
  </div>
</template>

<style>
.item {
  padding: 10px;
  border-radius: 10px;
  background-color: brown;
  outline-style: solid;
  outline-color: black;
  outline-width: 1px;
}
</style>
