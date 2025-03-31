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
        <p>
          At Lentils to Ladles, we believe that good, healthy food starts with
          simple practices and good farming. Nestled in the vibrant Division
          District of Portland Oregon, our cozy soup kitchen is dedicated to
          serving delicious plant-based meals that comfort you with every bite.
          Whether you're looking for a nourishing bowl of soup or a welcoming
          space to enjoy a home-cooked meal, come in and enjoy.
        </p>
      </div>
      <div id="menu">
        <h2>Menu</h2>
        <p>
          At Lentils to Ladles, our menu changes with the seasons, providing
          only the freshest, most flavorful soups made from locally sourced
          ingredients. We focus on comfort food and soups, but have salads and
          other light meals for those with a smaller appetite.
        </p>
        <h3>Featured Soups</h3>
        <ul>
          <li>
            <b>Lentil Stew</b>
            - A classic, hearty mix of lentils and vegetables in a savory broth
          </li>
          <li>
            <b>Lemon Rosemary White Bean Soup</b>
            - A hearty white bean soup with lemon, herbs and veggies.
          </li>
          <li>
            <b>Rosted Kabocha Squash Soup</b>
            - thick and creamy, bursting with pops of ginger, cumin, and
            coriander.
          </li>
        </ul>
      </div>
    </body>
  </div>
</template>

<style>
  header {
    background-image: url("../assets/farm.jpeg");

    background-repeat: repeat-x; /* This repeats the image only horizontally */
    background-size: cover; /* Ensures the image covers the entire width */
  }
  li
  {
    list-style-type: none;
  }
</style>
