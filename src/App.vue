<template>
  <nav class="top">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/menu">Menu</router-link>
  </nav>
  <router-view />
  <footer>
    <div id="cont">
      <div id="social" class="in">
        <h3>Lentils to Ladles</h3>
        <p>
          Stay connected and follow us on social media for the latest updates and
          seasonal specials!
        </p>
        <p>Instagram: @lentilstoladles</p>
        <p>Facebook: Lentils to Ladles</p>
      </div>
      <div id="quick" class="in">
        <h3>Quick Links</h3>
        <nav class="bottom">
          <router-link to="/">Home</router-link><br />
          <router-link to="/about">About</router-link><br />
          <router-link to="/menu">Menu</router-link>
        </nav>
      </div>
      <div id="contact" class="in">
        <h3>Contact US</h3>
        <p>123 SE Division St, Portland, OR 97211</p>
        <p>(503) 123-1234</p>
        <p>contact@lentilstoladles.com</p>
      </div>
      <div id="hours" class="in">
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
    </div>
    <p id="copy">&copy;2025 Lentils to Ladles. All rights reserved.</p>
  </footer>
</template>

<style>
*
{
  box-sizing: border-box;
  padding:0px;
}
@media screen and (max-width: 600px)
{
  footer{
    display: block;
    padding: 10px;
  }
  #quick
  {
    text-align: left;
    padding: 2%;

  }
  #contact
  {
    text-align: left;
    padding: 2%;

  }
  #hours
  {
    text-align:left;
    padding: 2%;
    margin: 0;
  }
  #social
  {
    text-align:left;
    padding: 2%;
  }
  #copy
  {
    text-align: center;
  }
}
@media screen and (min-width: 600px) and (max-width: 1023px) {
  #cont
  {
    display: grid;
    grid-template-columns: 50% 50%;
  }
  #quick
  {
    text-align: left;
    padding: 2%;

  }
  #contact
  {
    text-align: left;
    padding: 2%;

  }
  #hours
  {
    text-align:left;
    padding: 2%;
    margin: 0;
  }
  #social
  {
    text-align:left;
    padding: 2%;
  }
  #copy
  {
    text-align: center;
    padding: 10px;
  }
}
@media screen and (min-width: 1023px) {
  footer {
    font-size: .9rem;
    padding: 1%;
  }
  #cont
  {
    display: flex;
    justify-content:space-around;
  }
  #quick
  {
    width:25%;
    text-align: left;
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
  #social
  {
    width:25%;
    text-align:left;
    padding: 1%;
  }
  #social h3
  {
    margin-top: .5em;
  }
  #copy
  {
    text-align: center;
    padding: 10px;
  }
}
footer
  {
    background-color: #91a36f;
  }
.bottom a {
  color: #3f4936;
  text-decoration: none;
  line-height: 200%;
}
#hours ul {
  list-style-type: none;
  padding: 0;
  margin: .5em;
}
#hours li {
  display: flex;
  justify-content: space-between;
}
#hours h3
{
  margin-bottom: .5em;
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
