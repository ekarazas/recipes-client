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

input {
  border: 1px solid rgba(78, 78, 78, 0.185);
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: rgba(78, 78, 78, 0.185) 1px 2px 5px 0px;
  padding: 0.8rem;
  outline: none;
  width: 100%;
}

textarea {
  border: 1px solid rgba(78, 78, 78, 0.185);
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: rgba(78, 78, 78, 0.185) 1px 2px 5px 0px;
  padding: 0.8rem;
  outline: none;
  width: 100%;
}

label {
  font-weight: 700;
  display: inline-block;
  margin: 0.5rem 0;
}

.button-position {
  text-align: right;
}

button[type='submit'] {
  background: rgb(68, 160, 106);
  border: none;
  border-radius: 50px;
  color: white;
  cursor: pointer;
  margin-top: 1.5rem;
  padding: 0.7rem 1.4rem;
  outline: none;
}

button[type='submit']:hover {
  background: rgb(38, 141, 81);
}
</style>
