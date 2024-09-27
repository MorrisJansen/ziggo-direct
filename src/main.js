import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import Pagina1 from './views/Pagina1.vue'
import Pagina2 from './views/Pagina2.vue'
import Pagina3 from './views/pagina3.vue'
import Pagina4 from './views/pagina4.vue'
import Pagina5 from './views/pagina5.vue'
import Pagina6 from './views/pagina6.vue'
import Bedankt from './views/Bedankt.vue'
import dank from './views/dank.vue'


const routes = [
    { path: '/', component: Home},
    { path: '/Pagina1', component: Pagina1, name: 'pagina1'},
    { path: '/Pagina2', component: Pagina2, name: 'pagina2'},
    { path: '/Pagina3', component: Pagina3, name: 'pagina3'},
    { path: '/Pagina4', component: Pagina4, name: 'pagina4'},
    { path: '/Pagina5', component: Pagina5, name: 'pagina5'},
    { path: '/Pagina6', component: Pagina6, name: 'pagina6'},
    { path: '/Bedankt', component: Bedankt, name: 'Bedankt'},
    { path: '/bedankt', component: dank,    name: 'dank'}

    

]

const router = createRouter({
    history: createWebHistory(),
    routes
})



createApp(App).use(router).mount('#app')
