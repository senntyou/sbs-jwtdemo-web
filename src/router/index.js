import Vue from 'vue';
import Router from 'vue-router';

import Layout from '../sys/views/layout/Layout';
import routes from './routes';

Vue.use(Router);

/** note: Submenu only appear when children.length>=1
 *  detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 * */

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
 *   title: 'title'               the name show in submenu and breadcrumb (recommend set)
 *   icon: 'fa-circle'            font-awesome icon
 *   noCache: true                if true ,the page will no be cached(default is false)
 * }
 * */
export const constantRouterMap = [
  {
    path: '/login',
    component: () => import('../sys/views/login/index'),
    hidden: true,
  },
  {
    path: '/auth-redirect',
    component: () => import('../sys/views/login/authredirect'),
    hidden: true,
  },
  {
    path: '/404',
    component: () => import('../sys/views/errorPage/404'),
    hidden: true,
  },
  {
    path: '/401',
    component: () => import('../sys/views/errorPage/401'),
    hidden: true,
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    meta: { title: 'dashboard', icon: 'fa-circle', noCache: true },
    children: [
      {
        path: 'dashboard',
        component: () => import('../sys/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', noCache: true },
      },
    ],
  },
  ...routes,
  { path: '*', redirect: '/404', hidden: true },
];

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap,
});

export const asyncRouterMap = [];
