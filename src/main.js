import  Vue from 'vue'

import App  from  './app.vue'

import VueResource from  'vue-resource'

import VueRouter from 'vue-router'

import router from './router.js'

import moment from 'moment'

// const Faceit = require('faceit-js-api')

import Vuex from 'vuex'

// import Faceit from 'faceit-js-api'

import VuePreview from 'vue2-preview'

// faceit.getPlayerInfo("m0NESY").then(function (player) {
//     console.log(player);
// });

// Vue.use(Faceit)

Vue.use(VuePreview)

Vue.use(VueRouter);

Vue.use(VueResource);

Vue.use(Vuex);

Vue.filter('dateFormat',function (dateStr , pattern = 'YYYY-MM-DD HH:mm:ss') {
    return  moment(dateStr).format(pattern)
 })

// Vue.http.options.root = 'https://api.faceit.com/';


var vm = new Vue({
    el:'#app',
    data:{

    },
    methods:{

    },

    render: c => c(App),

    router

})