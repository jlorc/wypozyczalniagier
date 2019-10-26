import Vue from 'vue';
import Router from 'vue-router';
import GamesList from '@/components/GamesList';
import AdminPanel from '@/components/AdminPanel';
import AdminLogin from '@/components/AdminLogin';

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
      name: 'AdminLogin',
      component: AdminLogin,
    },
    {
      path: '/admin-panel',
      name: 'AdminPanel',
      component: AdminPanel,
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
});
