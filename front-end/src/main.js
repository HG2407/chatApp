import { createApp } from 'vue';
import store from './store/index.js';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';


let routes = [
    {
        path: '/',
        component: () => import('./components/homePage.vue')
    },
    {
        path: '/chatRoom',
        component: () => import('./components/chatApp.vue')
    },
    {
        path: '/room/:id',
        component: () => import('./components/roomPage.vue')
    }
]

let router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})



createApp(App).use(router).use(store).mount('#app');

