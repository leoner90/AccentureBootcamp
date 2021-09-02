import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import AllBlogs from '../views/AllBlogs.vue';
import AddBlog from '../views/AddBlog.vue';
import Registration from '../views/UserReg.vue';
import LogIn from '../views/UserLogIn.vue'
import UserBlogs from '../views/UserBlogs.vue'
import EditBlog from '../views/EditBlog.vue'
import ErrorPage from '../views/404.vue';
import SingleBlogView from '../views/SingleBlogView.vue'
//To check is User Loged In or not
import state from '@/store/states.js'

const routes = [
  {
    path: "/:catchAll(.*)",
    component: ErrorPage,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/SingleBlogView',
    name: 'SingleBlogView',
    component: SingleBlogView
  },
  {
    path: '/addblog',
    name: 'AddBlog',
    component: AddBlog,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/AllBlogs',
    name: 'AllBlogs',
    component: AllBlogs
  },
  { 
    path: '/UserBlogs',
    name: 'UserBlogs',
    component: UserBlogs,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/Registration',
    name: 'Registration',
    component: Registration,
    meta: {
      RegPageAuth: true,
    }
  },
  {
    path: '/LogIn',
    name: 'LogIn',
    component: LogIn,
    meta: {
      RegLogInAuth: true,
    }
  },
  {
    path: '/editblog',
    name: 'EditBlog',
    component: EditBlog,
    meta: {
      requiresAuth: true,
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//Check user Authorization , and renders proper page
router.beforeEach((to, from, next) => {
  let isLoged = state.isLogedIn;
  //For All page which have sensitive information
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if(!isLoged ) {
      router.push('/Login');
    } else {
      next();
    }
    //For Reg Page , or load Reg. page , or redirect to main page
  } else if (to.matched.some((record) => record.meta.RegPageAuth)) {
    if(isLoged) {
      router.push('/');
    } else {
      next()
    }
    //For Login Page , or load Login page , or redirect to main page
  } else if (to.matched.some((record) => record.meta.RegLogInAuth)) {
    if(isLoged) {
      router.push('/');
    } else {
      next()
    }
    //For the rest pages
  } else {
    next();
  }
})

router.afterEach(() => {
  window.scrollTo(0, 0);
})

export default router