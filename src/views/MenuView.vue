<script setup>
import { ref } from "vue";
import menudata from "../assets/menu.json";
//eslint-disable-next-line
import menuitem from "../components/menu_item.vue";
import orderitem from "../components/order_item.vue";
const data = menudata["menu"];
//eslint-disable-next-line
const menuitems = ref(data);
const order = ref([]);
function addorder(id) {
  console.log(id);
  order.value.push(menuitems.value[id]);
  order.value[order.value.length - 1]["index"] = order.value.length - 1;
  console.log(order);
}

function deleteitem(id) {
  order.value.splice(id, 1);
  for (let i = 0; i < order.value.length; i++) {
    order.value[i]["index"] = i;
  }
  console.log(order.value);
}
</script>
<template>
  <div class="Menu">
    <h1>This is a menu page</h1>
  </div>
  <div v-for="item in menuitems" :key="item.key">
    <menuitem
      @menuorder="addorder"
      :name="item.name"
      :price="item.price"
      :id="item.key"
    />
  </div>
  your order starts below
  <div v-for="item in order" :key="item.key">
    <orderitem
      @deleteorder="deleteitem"
      :name="item.name"
      :price="item.price"
      :index="item.index"
    />
  </div>
</template>

<style>
menuitem {
  background-color: burlywood;
}
</style>
