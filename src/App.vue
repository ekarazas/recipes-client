<template>
  <div class="hero-image">
    <nav>
      <div class="wrapper">
        <div class="flex-item">
          <router-link to="/"><img src="./images/logo.png" alt="logo"/></router-link>
        </div>
        <div class="flex-item">
          <router-link class="nav-item" to="/">Home</router-link>
          <router-link class="nav-item" to="/myrecipes">My recipes</router-link>
          <router-link class="nav-item" to="/about">Add recipe</router-link>
          <router-link class="sign-button" to="/about">Login</router-link>
          <router-link class="sign-button" to="/about">Register</router-link>
        </div>
      </div>
    </nav>
  </div>
  <router-view />
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

html,
body {
  font-family: 'Roboto', sans-serif;
}

.hero-image {
  background-image: linear-gradient(rgba(24, 24, 15, 0.7), rgba(24, 24, 15, 0.7)),
    url('./images/hero.jpg');
  background-size: cover;
  background-position: top;
  height: 70vh;
}

.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

a img {
  height: 70px;
  margin-left: 1rem;
}

.nav-item {
  color: white;
  margin-left: 1.5rem;
  padding: 0.5rem 1.2rem;
  text-decoration: none;
}

.sign-button {
  border: 1px solid #fff;
  border-radius: 100px;
  color: #fff;
  margin-left: 1.2rem;
  padding: 0.7rem 1.4rem;
  text-decoration: none;
}
</style>
