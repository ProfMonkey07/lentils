<template>
  <nav class="top">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/menu">Menu</router-link>
  </nav>
  <router-view />
  <footer>
    <div id="quick">
      <h2>Quick Links</h2>
      <nav class="bottom">
        <router-link to="/">Home</router-link><br />
        <router-link to="/about">About</router-link><br />
        <router-link to="/menu">Menu</router-link>
      </nav>
    </div>
    <div id="contact">
      <h2>Contact US</h2>
      <p>123 SE Division St, Portland, OR 97211</p>
      <p>(503) 123-1234</p>
      <p>contact@lentilstoladles.com</p>
    </div>
    <div id="hours">
      <h2>Operating Hours</h2>
      <li>
        <ul>
          Monday-Friday
        </ul>
        <ul>
          8:00 AM - 9:00 PM
        </ul>
      </li>
      <li>
        <ul>
          Saturday
        </ul>
        <ul>
          8:00 AM - 10:00 PM
        </ul>
      </li>
      <li>
        <ul>
          Sunday
        </ul>
        <ul>
          9:30 AM - 9:00 PM
        </ul>
      </li>
    </div>
    <div id="social">
      <p>
        Stay connected and follow us on social media for the latest updates and
        seasonal specials!
      </p>
      <p>Instagram: @lentilstoladles</p>
      <p>Facebook: Lentils to Ladles</p>
    </div>
  </footer>
</template>

<style>
footer {
  display: flex;
}
.bottom a {
  color: #2c3e50;
  text-decoration: none;
}
#hours ul {
  list-style-type: none;
}
#hours li {
  display: flex;
}
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
