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
import { computed, ref } from 'vue'

export default {
  setup(){

const jobs =ref([])
const job = computed(()=>{
          return $store.state.jobs


})
return {jobs,job}
  },  
 mounted(){
    fetch('http://localhost:3000/jobs')
    .then(response=>response.json())
    .then(data=> jobs.value =data) //assigning the fetched data to the jobs array 

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