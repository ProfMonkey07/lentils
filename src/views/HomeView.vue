<template>
  <div class="home">
    <header>
      <img
        class="logo"
        alt="menu logo"
        src="../assets/logo.png"
        width="400"
        height="400"
      />
    </header>
    <body>
      <div id="about">
        <h2>About Us</h2>
        <p>At Lentils to Ladles, we believe that good, healthy food starts with simple practices and good farming. Nestled in the vibrant Division District of Portland Oregon, our cozy soup kitchen is dedicated to serving delicious plant-based meals that comfort you with every bite. Whether you're looking for a nourishing bowl of soup or a welcoming space to enjoy a home-cooked meal, come in and enjoy.</p>
      </div>
      <div id="menu">
        <h2>Menu</h2>
        <p>At Lentils to Ladles, our menu changes with the seasons, providing only the freshest, most flavorful soups made from locally sourced ingredients. We focus on comfort food and soups, but have salads and other light meals for those with a smaller appetite.</p>
        <h3>Featured Soups</h3>
        <li>
          <ul><b>Lentil Stew</b> - A classic, hearty mix of lentils and vegetables in a savory broth</ul>
          <ul><b>Lemon Rosemary White Bean Soup</b> - A hearty white bean soup with lemon, herbs and veggies.</ul>
          <ul><b>Rosted Kabocha Squash Soup</b> - thick and creamy, bursting with pops of ginger, cumin, and coriander.</ul>
        </li>
      </div>
    </body>
    <footer>
      <div id="quick">
        <h2>Quick Links</h2>
        <nav class="bottom">
          <router-link to="/">Home</router-link><br>
          <router-link to="/about">About</router-link><br>
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
          <ul>Monday-Friday</ul>
          <ul>8:00 AM - 9:00 PM</ul>
        </li>
        <li>
          <ul>Saturday</ul>
          <ul>8:00 AM - 10:00 PM</ul>
        </li>
        <li>
          <ul>Sunday</ul>
          <ul>9:30 AM - 9:00 PM</ul>
        </li>
      </div>
      <div id="social">
        <p>Stay connected and follow us on social media for the latest updates and seasonal specials!</p>
        <p>Instagram: @lentilstoladles</p>
        <p>Facebook: Lentils to Ladles</p>
      </div>
    </footer>
  </div>
</template>

<style>
header {
  background-image: url("../assets/farm.jpeg");
  background-repeat: repeat-x; /* This repeats the image only horizontally */
  background-size: cover; /* Ensures the image covers the entire width */
}
footer
{
  display: flex;
}
.bottom a
{
  color: #2c3e50;
  text-decoration: none;
}
#hours ul
{
  list-style-type: none;
}
#hours li
{
  display: flex;
}
</style>
