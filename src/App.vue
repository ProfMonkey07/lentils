<template>
  <nav class="top">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/menu">Menu</router-link>
  </nav>
  <router-view />
  <footer>
    <div id="quick">
      <h3>Quick Links</h3>
      <nav class="bottom">
        <router-link to="/">Home</router-link><br />
        <router-link to="/about">About</router-link><br />
        <router-link to="/menu">Menu</router-link>
      </nav>
    </div>
    <div id="contact">
      <h3>Contact US</h3>
      <p>123 SE Division St, Portland, OR 97211</p>
      <p>(503) 123-1234</p>
      <p>contact@lentilstoladles.com</p>
    </div>
    <div id="hours">
      <h3>Operating Hours</h3>
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
*
{
  box-sizing: border-box;
}
footer {
  display: flex;
  justify-content:space-around;
  font-size: .9rem;
  background-color: #91a36f;
  padding: 1%;
}
#quick
{
  width:25%;
  text-align: left;
}
.bottom a {
  color: #3f4936;
  text-decoration: none;
}
#contact
{
  width:25%;
  text-align: left;
}
#hours
{
  width:25%;
  text-align:left;
  
}
#hours ul {
  list-style-type: none;
  padding-left: 0;
}
#hours li {
  display: flex;
  justify-content: space-between;
}
#social
{
  width:25%;
  text-align:left;
  padding: 1%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3f4936;
}

body {
  background-color: burlywood;
  margin: 0px;
}

.top {
  padding: 30px;
  background-color: #91a36f;
}

.top a {
  font-weight: bold;
  color: #3f4936;
}

.top a.router-link-exact-active {
  color: #4c5a40;
}
</style>
