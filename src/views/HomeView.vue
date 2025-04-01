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
      <div class="container">
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
        <div id="hoursH">
          <h2>Operating Hours</h2>
          <ul>
            <li>
              Monday
            </li>
            <li>
              8:00 AM - 9:00 PM
            </li>
          </ul>
          <ul>
            <li>
              Tuesday
            </li>
            <li>
              8:00 AM - 9:00 PM
            </li>
          </ul>
          <ul>
            <li>
              Wednesday
            </li>
            <li>
              8:00 AM - 9:00 PM
            </li>
          </ul>
          <ul>
            <li>
              Thurday
            </li>
            <li>
              8:00 AM - 9:00 PM
            </li>
          </ul>
          <ul>
            <li>
              Friday
            </li>
            <li>
              8:00 AM - 9:00 PM
            </li>
          </ul>
          <ul>
            <li>
              Saturday
            </li>
            <li>
              8:00 AM - 10:00 PM
            </li>
          </ul>
          <ul>
            <li>
              Sunday
            </li>
            <li>
              9:30 AM - 8:00 PM
            </li>
          </ul>
        </div>
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
  #about
  {
    margin: 20px 0px;
  }
  p
  {
    margin: 0px 0px 0px 10px;
    text-align: left;
  }
  #menu ul
  {
    text-align: left;
    margin: 10px 0px 10px 50px;
  }
  #menu ul li
  {
    padding: 5px;
    margin-bottom: 2px;
  }
  #menu h3
  {
    text-align: left;
    margin-left:40px;
  }
  #hoursH li {
  list-style-type: none;
  padding: 0;
  margin: .5em;
}
#hoursH ul {
  display: flex;
  justify-content: space-between;
}
#hoursH
  {
    max-width: 450px;
  }
@media screen and (max-width: 600px) {
  .container{
    display: block;
  }
  #hoursH{
    margin:auto;
  }
}
@media screen and (min-width:600px) and (max-width:1023px) {
  .container{
    display: grid;
    grid-template-columns: 50% 50%;
  }
  #hoursH{
    text-align: center;
    justify-content: center;
    max-width: 500px;
    margin: 0px 20px 20px 20px;
    border: 2px solid rgb(231, 191,142);
    border-radius: 5px;
  }
  #menu
  {
    max-width:500px;
    justify-content: center;
    margin: 0px 20px 20px 20px;
    border: 2px solid rgb(231, 191,142);
    border-radius: 5px;
  }
  
}
@media screen and (min-width: 1023px) {
  .container{
    display: grid;
    grid-template-columns: 50% 50%;
    justify-content: center;
  }
  #hoursH{
    text-align: center;
    justify-content: center;
    align-content:top;
    max-width: 500px;
    margin: 0px 20px 20px 20px;
    border: 2px solid rgb(231, 191,142);
    border-radius: 5px;
  }
  #menu
  {
    align-content:top;
    max-width:500px;
    justify-self: right;
    margin: 0px 20px 20px 20px;
    border: 2px solid rgb(231, 191,142);
    border-radius: 5px;
  }
}
</style>
