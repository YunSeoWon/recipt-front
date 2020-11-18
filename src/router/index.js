import { createWebHistory, createRouter } from "vue-router";
import Login from "../components/user/Login.vue"
import Home from "../components/Home.vue"
import NotFound from "../components/error/NotFound.vue"
import Signup from "../components/user/Signup.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/user/login",
    name: "Login",
    component: Login
  },
  {
    path: "/user/signup",
    name: "Signup",
    component: Signup
  }
  // ,
  // {
  //   path: "*",
  //   name: "NotFound",
  //   component: NotFound
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
