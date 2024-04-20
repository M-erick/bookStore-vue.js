<template>
  
  <table border="1px">
    <tr>
        <td>Name</td>
        <td>Salary</td>
        <td>Age</td>
    </tr>
    <tr v-for="item in data" :key="item.id">
        <td>{{item.employee_name}}</td>
        <td>{{item.employee_salary}}</td>
        <td>{{item.employee_age}}</td>

    </tr>

  </table>
</template>

<script>
import axios from  'axios'
import { ref } from 'vue'
export default {
    name:"Employer",
    setup(){
        const data = ref('')
        
        return{data }

    },
   
    methods:{

    },
    async created(){  //hook
    try{
        const response = await axios.get('http://dummy.restapiexample.com/api/v1/employees')
        data.value = response.data.data


    }catch(error){
        console.log(error)

    }
    }

       

}
</script>

<style>


</style>