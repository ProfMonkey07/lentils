<template>
  <div class="about">
    <header class="head">
      <h1>about us</h1>
    </header>
    <div class="blurb">
      <h1>who we are</h1>
      <p>
        At Lentils to Ladles, we believe that good, healthy food starts with
        simple practices and good farming. Nestled in the vibrant Division
        District of Portland Oregon, our cozy soup kitchen is dedicated to
        serving delicious plant-based meals that comfort you with every bite.
        Whether you're looking for a nourishing bowl of soup or a welcoming
        space to enjoy a home-cooked meal, come in and enjoy.
      </p>
    </div>
    <div class="growers">
      <h1>where we source our food from</h1>
      <p>
        At Lentils to Ladles we believe in organic, locally grown produce. We
        source from sustainable farms in oregon, and work with all our suppliers
        to make a commitment to preserving the land and the world we live in.
        Supporting local produce doesn't just result in better food, it uplifts
        the community around us as well
      </p>
      <img class="market" src="../assets/PSU1.jpg" />
    </div>
  </div>
</template>

<style>
.blurb {
  padding-left: 20px;
  text-align: left;
  width: 50%;
}

.growers {
  padding-left: 20px;
  text-align: left;
  width: 50%;
}

.head {
  background-image: url("../assets/lentils.jpg");
  padding-bottom: 10px;
  padding-top: 10px;
  background-size: 100%;
  background-repeat: repeat-x; /* This repeats the image only horizontally */
  color: white;
  font-size: 150%;
}
</style>
