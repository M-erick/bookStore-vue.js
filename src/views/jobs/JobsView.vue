<template>
  <h1>
     Available jobs
  </h1>
  <div v-for="job in jobs" :key="job.id" class="job">
   <router-link :to="{name:'JobDetails', params:{id:job.details}}">

    <h2>{{job.title}}</h2>

   </router-link>

  </div>

</template>

<script>
export default {
  data(){
    return{
      jobs:[]

    }
  },

  mounted(){
    fetch('http://localhost:3000/jobs')
    .then(response=>response.json())
    .then(data=> this.jobs =data) //assigning the fetched data to the jobs array 

    .catch(error=>error.message)

  },


    computed:{
      // accessing the store :implementing
      jobs(){
        return this.$store.state.jobs
      }
    }

}
</script>

<style>
.jobs h2 {
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
  font-size: bold;
}
.job h2:hover {
  background-color: #ddd;
}
.job a {
  text-decoration: none;
}

</style>