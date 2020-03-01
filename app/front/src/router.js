import Vue from "vue";
import VueRouter from "vue-router";

import AppRouter from './app/router';
import Inscription from './Inscription'
import Connexion from './Connexion'

Vue.use(VueRouter);

const routes = [
    ...AppRouter,
    {
        path: '/inscription',
        name: 'Inscription',
        component: Inscription
    },
    {
        path: '/connexion',
        name: 'Connexion',
        component: Connexion
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;