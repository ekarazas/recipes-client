<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: ['message'],
};
</script>

<style scoped>
div {
  background: rgb(81, 208, 197);
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 2rem;
  text-align: center;
  color: white;
  font-weight: 400;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  text-transform: uppercase;
}

p {
  margin: 0;
}
</style>
