<script setup>
import { defineProps } from "vue";
const props = defineProps(["name", "price", "id", "loc"]);
function getsource() {
  return require("@/assets/" + props.loc);
}
</script>

<template>
  <div class="menuitem">
    <div class="notimage">
      <h4>{{ name }} ${{ price }}</h4>
      <button @click="$emit('menuorder', id)">add to cart</button>
    </div>
    <img class="image" :src="getsource()" />
  </div>
</template>

<style>
  *{
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
  }
  @media screen and (max-width: 600px)
  {
    .menuitem{
      display: block;
      border: 2px solid rgb(231, 191,142);
      border-radius: 10px;
      background-size:cover;
      margin: 10px 10px 0px 10px;
    }
    .image{
      max-width:75%;
      justify-self: center;
      align-self: center;
      border-radius: 50px;
      padding: 0px 0px 5px;
    }
    .notimage
    {
      margin-top: 10px;
      padding:10px;
      align-content: center;
      background-image: url("../assets/paper.png");
      background-size:contain;
      background-position: center;
      min-width:75%;
      background-repeat: no-repeat;
      justify-self:center;
    }
    .notimage button
    {
      max-width:500px;
      justify-self: center;
      min-width: 100px;
      height: 50px;
      font-size: large;
      background-color: #A34E14;
      border: 1px solid #A34E14;
      border-radius: 10px;
      padding: 5px;
      font-family: serif;
      font-weight: bold;
      font-style: normal;
      margin: 5px 0px 10px 0px;
      color: rgb(241, 219, 206);
    }
  }
  @media screen and (min-width: 600px) and (max-width: 1023px) 
  {
    .menuitem {
      display: grid;
      grid-template-columns: 50% 50%;
      border-radius: 10px;
      margin-top: 10px;
      justify-content: center;
      margin-bottom: 10px;
    }
    .image{
      max-width:75%;
      justify-self: center;
      align-self: center;
      border-radius: 50px;
      padding: 0px 0px 5px;
    }
    .notimage
    {
      align-content: center;
      background-image: url("../assets/paper.png");
      background-size:contain;
      min-width:75%;
      background-repeat: no-repeat;
      justify-self:center;
    }
    .notimage button{
      grid-column-start: 1;
      grid-column-end: 3;
      max-width:500px;
      justify-self: center;
      min-width: 100px;
      height: 50px;
      font-size: large;
      background-color: #A34E14;
      border: 1px solid #A34E14;
      border-radius: 10px;
      padding: 5px;
      font-family: serif;
      font-weight: bold;
      font-style: normal;
      margin: 5px 0px 10px 0px;
      color: rgb(241, 219, 206);
    }
  }
  @media screen and (min-width: 1023px)
  {
    .menuitem {
      display: grid;
      grid-template-columns: 50% 50%;
      border-radius: 10px;
      margin-top: 10px;
      justify-content: center;
      margin-bottom: 10px;
    }
    .image{
      max-width:500px;
      justify-self: center;
      align-self: center;
      border-radius: 50px;
      padding: 0px 0px 5px;
    }
    .notimage
    {
      align-content: center;
      background-image: url("../assets/paper.png");
      background-size:contain;
      min-width:500px;
      background-repeat: no-repeat;
      justify-self:center;
    }
    .notimage button{
      grid-column-start: 1;
      grid-column-end: 3;
      max-width:500px;
      justify-self: center;
      min-width: 100px;
      height: 50px;
      font-size: large;
      background-color: #A34E14;
      border: 1px solid #A34E14;
      border-radius: 10px;
      padding: 5px;
      font-family: serif;
      font-weight: bold;
      font-style: normal;
      margin: 5px 0px 10px 0px;
      color: rgb(241, 219, 206);
    }
  }
</style>