import VueRouter from 'vue-router'
import Login from './components/login/Login.vue'
import Register from './components/register/Register.vue' 
import Profile from './components/profile/Profile.vue'
import Qrscaner from './components/qrscaner/Qrscaner.vue'

const routes = [
    {path:'/', component:Login},
    {path:'/register', component:Register},
    {path: '/profile', component:Profile},
    {path: '/scaner', component:Qrscaner}
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router
 
