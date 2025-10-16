import { createRouter } from 'vue-router';
import HomePage from '@/Home/HomePage.vue';


export default createRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
  ],
});
