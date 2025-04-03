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
    <img class="food" :src="getsource()" />
    <button @click="$emit('menuorder', id)">add to cart</button>
  </div>
</template>

<style>
template {
  display: inline-block;
}
.menuitem {
  background-image: url("../assets/paper.png");
  background-size: auto;
  background-repeat: no-repeat;
  border-radius: 10px;
  margin-top: 10px;
  text-align: left;
}
h4 {
  padding: 0px;
  margin: 0px;
  vertical-align: top;
}
.food {
  position: relative;
  left: 0;
  padding: 0px;
  margin: 0px;
  border-radius: 5px;
  scale: 20%;
}
</style>
