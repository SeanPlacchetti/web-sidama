<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>Users</h2>
    <div v-for="user in users" v-bind:key="user.user_id">
      <div>
        {{user.username}} -- {{user.email}}
      </div>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Sidama',
  created: function () {
    axios.get('/api/countries/')
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
      msg: 'Welcome to Sidama!'
    }
  }
}
</script>
