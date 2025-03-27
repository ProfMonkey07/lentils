<template>
  <nav class="top">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/menu">Menu</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-color: burlywood;
  margin: 0px;
}

.top {
  padding: 30px;
  background-color: coral;
}

.top a {
  font-weight: bold;
  color: #2c3e50;
}

.top a.router-link-exact-active {
  color: #42b983;
}
</style>
