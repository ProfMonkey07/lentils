<script setup>
import { defineProps } from "vue";
defineProps(["name", "price", "index"]);
</script>

<template>
  <div class="item">
    {{ name }}
    <button @click="$emit('deleteorder', index)">
      <img src="../assets/trash_icon.png" width="10px" height="10px" />
    </button>
  </div>
</template>

<style>
.item {
  width: 10%;
  padding: 10px 5px 5px 10px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5px;
  border-radius: 10px;
  background-color: white;
  outline-style: solid;
  outline-color: black;
  outline-width: 1px;
}
</style>
