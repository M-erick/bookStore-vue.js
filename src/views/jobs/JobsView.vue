<template>
  <h1>
    jobs
  </h1>
  <div v-for="job in jobs" :key="job.id" class="job">
   <router-link :to="{name:'JobDetails', params:{id:job.id}}">

    <h2>{{job.title}}</h2>

   </router-link>

  </div>

</template>

<script>
export default {
    data(){
        return{
            jobs:[
                {title:'study vue.js',id:1,details:'engineer'},
                {title:'study vue.js',id:2,details:'engineer'},
                {title:'study vue.js',id:3,details:'engineer'}


            ]
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