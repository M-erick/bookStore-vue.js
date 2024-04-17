<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
        <router-link :to="{name:'jobs'}" :class="{ active: currentRouteName === 'jobs' }">Jobs</router-link>

  </nav>
  <button @click="redirect">Redirect</button>
  <button @click="back">Go back</button>
  <button @click="forward">Forward</button>
  <router-view/>
</template>
<script>
export default {
  methods:{
    redirect(){
      this.$router.push({name:'Home'})
    },
    back(){
      this.$router.go(-1)
    },
    forward(){
      this.$router.go(1)
    }

  },
  // whenever the route changes ,this value changes
  computed: {
    currentRouteName() {
      return this.$route.name; // Access the current route name from $route
    },
  },

  watch: {
    '$route.name': {
      handler(newVal, oldVal) {
        if (newVal === 'jobs') {
          // Perform actions specific to the 'jobs' route
          console.log('Navigated to the Jobs route!');
        }
      },
      immediate: true, // Optionally, run the handler immediately after creation
    },
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
   margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  /* background-color: bisque; */
}

nav a.router-link-exact-active {
  background-color: crimson;
}
button{
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
