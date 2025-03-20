<script setup>
import { ref } from "vue";
import menudata from "../assets/menu.json";
//eslint-disable-next-line
import menuitem from "../components/menu_item.vue";
const data = menudata["menu"];
//eslint-disable-next-line
const menuitems = ref(data);
</script>
<template>
  <div class="Menu">
    <h1>This is a menu page</h1>
  </div>
  <div v-for="item in menuitems" :key="item.key">
    <menuitem :name="item.name" :price="item.price" />
  </div>
</template>

<style>
menuitem {
  background-color: burlywood;
}
</style>
