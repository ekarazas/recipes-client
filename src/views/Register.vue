<template>
  <div class="wrapper">
    <Title text="Register" />
    <Alert v-if="alert" v-bind:message="message" />
    <form v-on:submit.prevent="register">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" placeholder="info@info.com" required />
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" placeholder="Password" required />
      <div class="button-position">
        <button type="submit">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import Title from '../components/Title.vue';
import Alert from '../components/Alert.vue';

export default {
  name: 'Login',
  components: { Title, Alert },
  data() {
    return {
      email: '',
      password: '',
      alert: false,
      message: '',
    };
  },
  methods: {
    register() {
      axios
        .post('https://recipes-server-mfcu6.ondigitalocean.app/register', {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          this.alert = true;
          this.message = res.data.msg || res.data.error || 'Unexpected error. Try again later';
        })
        .catch((err) => {
          this.alert = true;
          if (err.message.includes(500)) {
            this.message = 'Email is already in use';
          }
        });
    },
  },
};
</script>

<style scoped>
.wrapper {
  max-width: 960px;
  margin: 0 20px;
}

@media only screen and (min-width: 980px) {
  .wrapper {
    max-width: 1220px;
  }
}

@media only screen and (min-width: 1240px) {
  .wrapper {
    margin: 0 auto;
  }
}
</style>
