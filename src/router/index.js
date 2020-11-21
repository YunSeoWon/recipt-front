import { createWebHistory, createRouter } from "vue-router";
import Login from "@/components/user/Login.vue"
import ReciptMain from "@/components/ReciptMain.vue"
import NotFound from "@/components/error/NotFound.vue"
import Signup from "@/components/user/Signup.vue"
import ProfilePage from "@/components/member/ProfilePage.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: ReciptMain
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
  },
  {
    path: "/user/profile",
    name: "ProfilePage",
    component: ProfilePage
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
