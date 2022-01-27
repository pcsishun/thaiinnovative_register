import VueRouter from 'vue-router'
import Login from './components/login/Login.vue'
import Register from './components/register/Register.vue' 


const routes = [
    {path:'/', component:Login},
    {path:'/register', component:Register},
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router
 
