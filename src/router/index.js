import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/auth/Login.vue'
import Registration from '../views/auth/Registration.vue'
import ForgotEmail from '../views/auth/forgot_password/Email.vue'
import ForgotPassword from '../views/auth/forgot_password/NewPassword.vue'
import ForgetVerifyCode from '../views/auth/forgot_password/VerifyCode.vue'
import TimeTracker from '../views/TimeTracker.vue'
import Profile from '../views/Profile.vue'
import Contact from '../views/Contact.vue'
import FAQ from '../views/FAQ.vue'
import Cookies from "js-cookie";

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/timetracker',
    name: 'timetracker',
    component: TimeTracker,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/faq',
    name: 'faq',
    component: FAQ
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    component: Login,
    props: {
      auth: true
    }
  },
  {
    path: '/registration',
    component: Registration
  },
  {
    path: '/forget_password/email',
    component: ForgotEmail
  },
  {
    path: '/forget_password/new_password',
    component: ForgotPassword
  },
  {
    path: '/forget_password/verify_code',
    component: ForgetVerifyCode
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (Cookies.get("employee_token")) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})

export default router
