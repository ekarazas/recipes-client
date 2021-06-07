<template>
  <div class="title">
    <h1>{{ text }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: ['text'],
};
</script>

<style scoped>
.title {
  margin: 2rem 0;
}

h1 {
  font-weight: 400;
  margin: 0;
}
</style>
