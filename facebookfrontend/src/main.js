import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);


import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import VueSession from 'vue-sessionstorage'
Vue.use(VueSession);

import App from './App.vue';
import Signup from './components/Signup.vue';
import Profile from './components/Profile.vue';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import VueLocalStorage from 'vue-localstorage'
 
Vue.use(VueLocalStorage)
// Or you can specify any other name and use it via this.$ls, this.$whatEverYouWant
Vue.use(VueLocalStorage, {
  name: 'VueLocalStorage',
  createComputed: true //created computed members from your variable declarations
})


import FBSignInButton from 'vue-facebook-signin-button';
Vue.use(FBSignInButton);

const routes = [
    {
            name: 'Home',
            path: '/',
            component: Home
    },
     {
            name: 'Login',
            path: '/login',
            component: Login
    },
    {
            name: 'Signup',
            path: '/signup',
            component: Signup
    },
    {
            name: 'Profile',
            path: '/profile',
            component: Profile
    }
];

const router = new VueRouter({ mode:'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');
