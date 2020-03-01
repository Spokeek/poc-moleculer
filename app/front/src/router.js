import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import AuthRouter from './components/auth/router';
import AppRouter from './components/app/router';

const routes = [
    AuthRouter,
    AppRouter,
    {
        path: '*',
        redirect: '/auth'
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;