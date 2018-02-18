import Vue from 'vue';
import Router from 'vue-router';
import Billya from '../components/Billya.vue';

Vue.use( Router );

export default new Router( {
  routes: [
    {
      path: '/',
      name: 'Billya',
      component: Billya
    }
  ]
} )
