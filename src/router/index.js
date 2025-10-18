import { createRouter, createWebHistory } from 'vue-router';
import ShoppingCart from '../cart/ShoppingCart.vue';
import HomePage from '../Home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import ProductSearch from '../search/ProductSearch.vue';
import PartInfo from '../parts/PartInfo.vue';


export default createRouter({
  linkActiveClass: 'active-link',
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/build',
      name: 'Build',
      component: RobotBuilder,
    },


    {
      path: '/search',
      name: 'Search',
      component: ProductSearch,
    },
    {
      path: '/parts/:partType/:id',
      name: 'Parts',
      component: PartInfo,
      props: true,
    },

    {
      path: '/cart',
      name: 'Cart',
      component: ShoppingCart,
      props: true,
    },
  ],
});
