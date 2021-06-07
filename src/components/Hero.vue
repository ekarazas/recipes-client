<template>
  <div class="hero-image">
    <nav>
      <div class="wrapper">
        <div class="flex-container">
          <div class="flex-item">
            <router-link to="/"><img src="~@/images/logo.png" alt="logo"/></router-link>
          </div>
          <div class="flex-item">
            <router-link class="nav-link" to="/">HOME</router-link>
            <router-link class="nav-link" to="/myrecipes">MY RECIPES</router-link>
            <router-link class="nav-link" to="/about">ADD RECIPE</router-link>
            <div class="sign-buttons">
              <router-link class="sign-button" to="/about">LOGIN</router-link>
              <router-link class="sign-button" to="/about">REGISTER</router-link>
            </div>
          </div>
        </div>
        <div class="hero-content">
          <h1>Premium and aunthentic recipes online!</h1>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Hero',
};
</script>

<style scoped>
.hero-image {
  background-image: linear-gradient(rgba(24, 24, 15, 0.7), rgba(24, 24, 15, 0.7)),
    url('~@/images/hero.jpg');
  background-size: cover;
  background-position: top;
  height: 100vh;
}

.wrapper {
  max-width: 300px;
  margin: 0 auto;
  text-align: center;
  height: 50vh;
}

a img {
  height: 120px;
  padding-top: 50px;
  margin-bottom: 20px;
}

.nav-link {
  display: inline;
  color: white;
  padding: 0.5rem 1.2rem;
  margin-bottom: 10px;
  text-decoration: none;
}

.flex-item:last-child {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sign-buttons {
  margin-top: 20px;
}

.sign-button {
  border: 1px solid #fff;
  border-radius: 100px;
  color: #fff;
  padding: 0.7rem 1.4rem;
  text-decoration: none;
}

.sign-button:last-child {
  margin-left: 10px;
}

.hero-content {
  color: #fff;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 320px) {
  nav img {
    height: 70px;
  }
}

@media only screen and (min-width: 980px) {
  .wrapper {
    max-width: 960px;
    padding-top: 2rem;
    height: 50vh;
  }

  .flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .flex-item:last-child {
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }

  a img {
    height: 80px;
    padding-top: 0;
    margin: 0;
  }

  .nav-link {
    margin-bottom: 0;
  }

  .hero-content {
    height: 100%;
    color: #fff;
    display: flex;
    align-items: center;
  }
}

@media only screen and (min-width: 1240px) {
  .wrapper {
    max-width: 1220px;
  }
}
</style>
