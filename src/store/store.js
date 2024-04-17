
// store/store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    jobs:[
        {title:'Software Engineer',id:1,details:'Reporting to the Senior Manager - Access Network Planning & Design, the role holder is responsible for the Design, plan and optimization of the wireless radio access network communications systems, including radio propagation modelling and prediction, interference analysis, frequency coordination and parameter definition.'},
        {title:'Data Engineer',id:2,details:'Data engineers typically have a background in Data Science, Software Engineering, Math, or a business-related field. Depending on their job or industry, most data engineers get their first entry-level job after earning their bachelor'},
        {title:'Client Service',id:3,details:'Data engineers typically have a background in Data Science, Software Engineering, Math, or a business-related field. Depending on their job or industry, most data engineers get their first entry-level job after earning their bachelors degree'},
        {title:'Network Administrator',id:4,details:'In-depth understanding of network protocols (TCP/IP, DNS, DHCP, etc.), network topologies (LAN, WAN, etc.), and network devices (routers, switches, firewalls, etc.) is essential.'},
        {title:'Database Administrator',id:5,details:'In-depth understanding of network protocols (TCP/IP, DNS, DHCP, etc.), network topologies (LAN, WAN, etc.), and network devices (routers, switches, firewalls, etc.) is essential.'}


    ]
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});
