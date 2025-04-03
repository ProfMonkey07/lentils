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
  order.value.push(JSON.parse(JSON.stringify(menuitems.value[id])));
  order.value[order.value.length - 1]["index"] = order.value.length - 1;
  console.log(order);
}
function deleteitem(id) {
  console.log(id);
  order.value.splice(id, 1);
  for (let i = 0; i < order.value.length; i++) {
    order.value[i]["index"] = i;
  }
  console.log(order.value);
}
</script>
<template>
  <div class="Menu">
    <h1>Explore Our Offerings</h1>
  </div>
  <div v-for="item in menuitems" :key="item.key">
    <menuitem
      @menuorder="addorder"
      :name="item.name"
      :price="item.price"
      :id="item.key"
      :loc="item.loc"
    />
  </div>
  <div class="order">
    your order:
    <br />
    <div v-for="item in order" :key="item.key">
      <orderitem
        @deleteorder="deleteitem"
        :name="item.name"
        :price="item.price"
        :index="item.index"
      />
    </div>
    <label for="fname">email:</label>
    <input type="email" />
    <button>place order</button>
  </div>
</template>

<style>
menuitem {
  background-color: burlywood;
}
.order {
  background-color: #8f5732;
  color:rgb(231, 191,142);
  padding: 10px;
}
h1{
  margin: 10px;
}
</style>
