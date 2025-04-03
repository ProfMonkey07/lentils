<script setup>
import { defineProps } from "vue";
const props = defineProps(["name", "price", "id", "loc"]);
function getsource() {
  return require("@/assets/" + props.loc);
}
</script>

<template>
  <div class="menuitem">
    <h4>{{ name }} ${{ price }}</h4>
    <img class="image" :src="getsource()" />
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
  background-size: auto;
  background-repeat: no-repeat;
  border-radius: 10px;
  margin-top: 10px;
}
h4 {
  display: inline-block;
  vertical-align: top;
}
.image {
  vertical-align: middle;
  display: inline-block;
  border-radius: 5px;
  scale: 20%;
}
</style>