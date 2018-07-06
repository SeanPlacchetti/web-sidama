<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Users</h2>
    <ul v-for="user in users" v-bind:key="user.user_id">
      <li>
        {{user.username}} -- {{user.email}}
      </li>
    </ul>
    <div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Sidama',
  created: function () {
    axios.get('/api/country/')
      .then((response) => {
        this.countries = response.data
      })
    axios.get('/api/users/')
      .then((response) => {
        this.users = response.data
      })
  },
  data: function () {
    return {
      countries: [],
      users: [],
      msg: 'Sidama!'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
