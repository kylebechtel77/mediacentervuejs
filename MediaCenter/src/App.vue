<template>
  <div id="app">
    <div id="nav" v-if="userNameExists">
      <router-link to="/">Home</router-link> |
      <router-link to="/calendar">Calendar</router-link> |
      <router-link to="/tiles">Tiles</router-link>
      <router-view/>
    </div>
    <div v-else>
      <Login></Login>
    </div>
  </div>
</template>

<script>
import Login from '@/views/Login.vue';
export default {
  name: 'main-view',
  components: {
    Login,
  },
  computed: {
    userNameExists: function () {
      if(!this.$store.state.username){
        if(window.location.href == 'http://localhost:8080/'){
          this.$store.state.username = 'Kyle Bechtel';
          return true;
        }
        return false;
      }
      return true;
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
