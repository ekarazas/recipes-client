<template>
  <Title text="Comments" />
  <form v-on:submit.prevent="add">
    <input type="text" v-model="comment" placeholder="Tell us your thoughts about this recipe..." />
    <div class="button-position">
      <button type="submit">Comment</button>
    </div>
  </form>

  <div class="comments" v-if="comments.length > 0">
    <div class="comment" v-for="comment in comments" :key="comment.id">
      <p>{{ comment.comment }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Title from './Title.vue';

export default {
  name: 'Comments',
  components: { Title },
  data() {
    return {
      comments: [],
      comment: '',
      recipeID: this.$route.params.recipeID,
    };
  },
  beforeMount() {
    axios
      .get(`https://recipes-server-mfcu6.ondigitalocean.app/comments/${this.recipeID}`)
      .then((res) => {
        this.comments = res.data;
      });
  },
  methods: {
    add() {
      if (this.comment) {
        axios
          .post(
            `https://recipes-server-mfcu6.ondigitalocean.app/comments/${this.recipeID}`,
            {
              comment: this.comment,
            },
            {
              headers: {
                authorization: `Beared ${localStorage.getItem('token')}`,
              },
            },
          )
          .then(() => {
            this.comments.push({ comment: this.comment });
            this.comment = '';
          });
      }
    },
  },
};
</script>

<style scoped>
button {
  margin-bottom: 2.5rem;
}

.comment {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background: rgb(255, 249, 233);
  padding: 0.1rem 1rem;
  margin-bottom: 2rem;
}
</style>
