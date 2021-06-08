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
  background: rgb(68, 160, 106);
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  color: white;
  margin: 0 auto;
  margin-bottom: 2rem;
  padding: 0.8rem;
  text-align: center;
  width: 100%;
}

p {
  margin: 0;
}
</style>
