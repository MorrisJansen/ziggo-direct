import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import Pagina1 from './views/Pagina1.vue'
import Pagina2 from './views/Pagina2.vue'



const routes = [
    { path: '/', component: Home},
    { path: '/Pagina1', component: Pagina1},
    { path: '/Pagina2', component: Pagina2},

]

const router = createRouter({
    history: createWebHistory(),
    routes
})



createApp(App).use(router).mount('#app')
