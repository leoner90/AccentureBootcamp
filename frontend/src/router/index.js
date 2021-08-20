import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Blogs from '../views/Blogs.vue';
import AddBlog from '../views/AddBlog.vue';
import Registration from '../views/UserReg.vue';
import LogIn from '../views/UserLogIn.vue'
import UserBlogs from '../views/UserBlogs.vue'
import EditBlog from '../views/EditBlog.vue'
import ErrorPage from '../views/ErrorPage.vue'

const routes = [
  {
    path: "/:catchAll(.*)",
    component: ErrorPage,
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/addblog',
    name: 'AddBlog',
    component: AddBlog
  },
  {
    path: '/Blogs',
    name: 'Blogs',
    component: Blogs
  },
  {
    path: '/UserBlogs',
    name: 'UserBlogs',
    component: UserBlogs
  },
  {
    path: '/Registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/LogIn',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/editblog',
    name: 'EditBlog',
    component: EditBlog
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router