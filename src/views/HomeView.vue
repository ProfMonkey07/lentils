<template>
  <div class="home">
    <header>
      <img
        class="logo"
        alt="menu logo"
        src="../assets/logo.png"
        width="300"
        height="300"
      />
    </header>
    <body>
      <div id="about">
        <section>
          <h1>Lentils To Ladles Soup Kitchen</h1> 
          <p id="desc" class="text"> 
            Experience our farm-to-table dining with locally sourced ingredients and a feeling of comfort in every bite.
          </p>
          <button class="text" type="button"><router-link to="/about">Learn More</router-link></button>
        </section>
        <div class="slidecont">
          <div class="Slide">
            <img id="soup" src="../assets/soup.jpg" alt="bowl of soup">
            <div id="farm" class="text">
              <h4>Farm To Table Experience</h4>
              <p>
                Locally sourced ingredients picked and prepared with care.
              </p>
            </div>
          </div>
          <div class="Slide">
            <img id="chef" src="../assets/chef.jpg" alt="Chef preparing soup">
            <div id="hand" class="text">
              <h4>Hand Crafted </h4>
              <p>
                Our chefs bring years of experience and passion, ensuring each bowl is packed with flavor.
              </p>
            </div>
          </div>
          <div class="Slide">
            <img id="salad" src="../assets/variety.jpg" alt="salad">
            <div id="variety" class="text">
              <h4>Something For Everyone </h4>
              <p>
                Between our hearty soups, savory salads, and fresh bread, we guarantee that you will find something to suit your taste.
              </p>
            </div>
          </div>
        </div>
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
          <button type="button"> <router-link to="/menu">View Full Menu</router-link></button>
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
  #about button
  {
    justify-self: center;
    min-width: 100px;
    height: 50px;
    font-size: larger;
    background-color: #A34E14;
    border: 1px solid #A34E14;
    border-radius: 10px;
    padding: 10px;
    font-family: serif;
    font-weight: bold;
    font-style: normal;
    margin: 10px 0px 20px 0px;
  }
  #about button a{
    text-decoration: none;
    color: rgb(231, 191,142);
  }
  #menu button
  {
    min-width: 100px;
    height: 50px;
    font-size: larger;
    background-color: #A34E14;
    border: 1px solid #A34E14;
    border-radius: 10px;
    padding: 10px;
    font-family: serif;
    font-weight: bold;
    font-style: normal;
    margin: 10px 0px 20px 0px;
  }
  #menu button a{
    text-decoration: none;
    color: rgb(231, 191,142);
  }
  li
  {
    list-style-type: none;
  }
  #about
  {
    display: grid;
    grid-template-columns: 50% 50%;
    max-width: 1000px;
    margin: 10px auto;
  }
  #about section
  {
    padding: 10px;
    max-width: 500px;
    margin: 0px auto;
  }
  #about img
  {
    margin: auto;
    width:90%;
  }
  .Slide .text
  {
    color: white;
    text-align: left;
    font-size: 15px;
    background-color: rgb(63, 73, 54, 0.4);
    max-width: 500px;
  }
  #farm
  {
    position: fixed;

  }
  .text
  {
    justify-self: left;
  }
  #about #desc
  {
    text-align: center;
    font-size: 20px;
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
  h2 {
    font-family: serif;
    font-weight: bold;
    font-style: normal;
  }
  h1{
    font-family: serif;
    font-weight: bold;
    font-style: normal;
    font-size: 30px;
  }
@media screen and (max-width: 600px) {
  #about
  {
    display: block;
  }
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
    align-content:top;
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
