<template>
  <h1>
    jobs
  </h1>
  <div v-for="job in jobs" :key="job.id" class="job">
   <router-link :to="{name:'JobDetails', params:{id:job.details}}">

    <h2>{{job.title}}</h2>

   </router-link>

  </div>

</template>

<script>
export default {
    computed:{
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
}
.job h2:hover {
  background-color: #ddd;
}
.job a {
  text-decoration: none;
}

</style>