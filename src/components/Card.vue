<template>
  <div class="card">
    <img v-bind:src="recipe.image" :alt="recipe.title" />
    <div class="card-content">
      <h3>{{ recipe.title }}</h3>
      <p>{{ recipe.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['recipe'],
};
</script>

<style scoped>
.card {
  background: rgb(255, 255, 255);
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px;
  cursor: pointer;
  margin-bottom: 2rem;
  width: 100%;
}

.card:hover {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

img {
  height: 250px;
  object-fit: cover;
  width: 100%;
}

.card-content {
  padding: 1.5rem;
}

h3 {
  margin: 0;
}

p {
  margin: 0;
  margin-top: 0.8rem;
}

@media only screen and (min-width: 980px) {
  .card {
    width: calc(25% - 2rem * 3 / 4);
  }

  .card:not(:nth-child(4n)) {
    margin-right: 2rem;
  }
}
</style>
