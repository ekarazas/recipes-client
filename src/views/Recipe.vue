<template>
  <div class="wrapper">
    <Title v-bind:text="recipe.title" />
    <div class="container">
      <img v-bind:src="recipe.image" :alt="recipe.title" />
      <div class="info">
        {{ recipe.description }}
      </div>
    </div>
    <Comments />
  </div>
</template>

<script>
import axios from 'axios';
import Title from '../components/Title.vue';
import Comments from '../components/Comments.vue';

export default {
  name: 'Recipe',
  components: { Title, Comments },
  data() {
    return {
      recipe: '',
    };
  },
  beforeMount() {
    axios
      .get(`https://recipes-server-mfcu6.ondigitalocean.app/recipes/${this.$route.params.recipeID}`)
      .then((res) => {
        this.recipe = res.data.data.recipe[0];
      });
  },
};
</script>

<style scoped>
.container {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin-top: 2rem;
}

.container img {
  max-height: 25rem;
  object-fit: cover;
  object-position: center;
  vertical-align: middle;
  width: 100%;
}

.info {
  text-align: center;
  padding: 2rem;
}

.wrapper {
  max-width: 700px;
  margin: 0 20px;
}

@media only screen and (min-width: 700px) {
  .wrapper {
    max-width: 700px;
    margin: 0 auto;
  }
}
</style>
