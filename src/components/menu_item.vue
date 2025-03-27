<script setup>
import { defineProps } from "vue";
defineProps(["name", "price", "id"]);
</script>

<template>
  <div class="menuitem">
    <h4>{{ name }} ${{ price }}</h4>
    <button @click="$emit('menuorder', id)">add to cart</button>
  </div>
</template>

<style>
template {
  display: inline-block;
}
.menuitem {
  display: inline-block;
  background-image: url("../assets/paper.png");
  background-size: cover;
  border-radius: 10px;
  margin-top: 10px;
}
</style>
