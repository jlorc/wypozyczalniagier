import Vue from 'vue';
import Router from 'vue-router';
import GamesList from '@/components/GamesList';
import AdminPanel from '@/components/AdminPanel';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'GamesList',
      component: GamesList,
    },
    {
      path: '/admin',
      name: 'AdminPanel',
      component: AdminPanel,
    },
  ],
});
