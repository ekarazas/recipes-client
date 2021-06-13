<template>
  <div class="wrapper">
    <Title text="Add Recipe" />
    <Alert v-if="alert" v-bind:message="message" />
    <form v-on:submit.prevent="add">
      <label for="title">Title</label>
      <input type="text" id="title" v-model="title" placeholder="Pasta" required />
      <label for="image">Image</label>
      <input type="text" id="image" v-model="image" placeholder="image.png" required />
      <label for="description">Description</label>
      <textarea
        name="description"
        id="description"
        v-model="description"
        maxlength="1000"
        placeholder="Very tasty meal"
      ></textarea>
      <div class="button-position">
        <button type="submit">Add Recipe</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import Title from '../components/Title.vue';
import Alert from '../components/Alert.vue';

export default {
  name: 'Add',
  components: { Title, Alert },
  data() {
    return {
      title: '',
      image: '',
      description: '',
      text: '',
      alert: false,
      userId: 0,
    };
  },
  beforeMount() {
    this.getUser();
  },
  methods: {
    getUser() {
      axios
        .get('https://recipes-server-mfcu6.ondigitalocean.app/user', {
          headers: {
            authorization: `Beared ${localStorage.getItem('token')}`,
          },
        })
        .then((res) => {
          this.userId = res.data.id;
        })
        .catch((err) => console.log(err));
    },
    add() {
      axios
        .post(
          'https://recipes-server-mfcu6.ondigitalocean.app/recipes',
          {
            title: this.title,
            image: this.image,
            description: this.description,
            owner_id: this.userId,
          },
          {
            headers: {
              authorization: `Beared ${localStorage.getItem('token')}`,
            },
          },
        )
        .then((res) => {
          this.alert = true;
          this.title = '';
          this.image = '';
          this.description = '';
          this.message = res.data.msg || res.data.error || 'Unexpected error. Try again later';
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
.wrapper {
  max-width: 960px;
  margin: 40px;
}

@media only screen and (min-width: 980px) {
  .wrapper {
    max-width: 1220px;
  }
}

@media only screen and (min-width: 1240px) {
  .wrapper {
    margin: 40px auto;
  }
}

textarea {
  border: none;
  box-sizing: border-box;
  width: 100%;
  height: 8rem;
  padding: 1rem;
  outline: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  resize: none;
}
</style>
