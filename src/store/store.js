import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

 export const store = new Vuex.Store({
    state:{
        jobs:[
            {title:'study vue.js',id:1,details:'engineer'},
            {title:'study vue.js',id:2,details:'engineer'},
            {title:'study vue.js',id:3,details:'engineer'}


        ]
    }
})