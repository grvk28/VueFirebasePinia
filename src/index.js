import { createRouter, createWebHistory} from 'vue-router'

import Login from './components/LoginPage.vue'
import Feed from './components/FeedPage.vue'
import SignUp from './components/SignUp.vue'
import Dashboard from './components/Dashboard.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const routes = [
    {
    path: '/login',
    name: 'login',
    component: Login
},
{
    path: '/Signup',
    name: 'Register',
    component: SignUp
},
{
    path: '/',
    name: 'Dashboard',
    component: Dashboard
},
{
    path: '/feed',
    name: 'Feed',
    component: Feed,
    meta: {
        requiresAuth: true,
    }
}
]


const router = createRouter({
history: createWebHistory(),
routes
})

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            getAuth(),
            (user) => {
                removeListener();
                resolve(user);
            },
            reject
        )
    })
}

router.beforeEach(async(to, from, next) => {
    if(to.matched.some((record) => record.meta.requiresAuth)) {
        if (await getCurrentUser()){
            next();
        } else {
            alert("you don't have access!");
            next("/");
        }
    } else {
        next();
    }
})

export default router  