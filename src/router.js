import VueRouter from 'vue-router'

import m0NESYContainer from '../src/components/m0NESY.vue'


var router = new VueRouter({
    routes:[
        {path:'/',redirect:"/home"},
        {path:'/home', component:m0NESYContainer},
        {path:'/xiaohai', component:m0NESYContainer},

    ]
})

export default  router