<template>
  <div class="wrapper">
    <Title text="Recipes" />
    <input type="text" v-model="searchPhrase" v-on:keyup="startSearch" placeholder="Search..." />
    <div class="container">
      <Card v-for="recipe in recipes" v-bind:key="recipe.id" :recipe="recipe" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Title from '../components/Title.vue';
import Card from '../components/Card.vue';

export default {
  name: 'Home',
  components: { Title, Card },
  data() {
    return {
      recipes: [],
      searchPhrase: '',
    };
  },
  beforeMount() {
    this.showRecipes();
  },
  methods: {
    showRecipes() {
      axios
        .get('https://recipes-server-mfcu6.ondigitalocean.app/recipes')
        .then((res) => {
          this.recipes = res.data;
        })
        .catch((err) => console.log(err));
    },
    startSearch(e) {
      if (e.key === 'Backspace' && this.searchPhrase.trim().length < 3) {
        this.showRecipes();
      }
      if (this.searchPhrase.trim().length >= 3) {
        axios
          .get(`https://recipes-server-mfcu6.ondigitalocean.app/recipes/${this.searchPhrase}`)
          .then((res) => {
            this.recipes = res.data;
          })
          .catch((err) => console.log(err));
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  max-width: 300px;
  padding: 1.5rem;
  margin: 0 auto;
}

@media only screen and (min-width: 300px) {
  .wrapper {
    max-width: 960px;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
  }
}

@media only screen and (min-width: 980px) {
  .wrapper {
    max-width: 1220px;
    padding: 1.5rem 4rem;
  }
}

input {
  margin-bottom: 2rem;
}
</style>
