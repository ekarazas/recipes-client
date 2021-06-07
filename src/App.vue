<template>
  <Hero />
  <router-view />
</template>

<script>
import Hero from './components/Hero.vue';

export default {
  name: 'App',
  components: { Hero },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

html,
body {
  font-family: 'Roboto', sans-serif;
}
</style>
