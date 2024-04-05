import { createRouter, createWebHistory } from "vue-router";
import Login from "@/components/Login.vue";
import Home from "@/views/Homepage.vue";
import About from "@/views/About.vue";
import ProfileView from "@/views/ProfileView.vue";
// import Profile from '@/views/Profile.vue';

const routes = [
  {
    path: "/", // The root path should only be declared once.
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "Home", // Assuming you want to navigate to Home component via '/home' path
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/profile",
    name: "Profile",
    component: ProfileView,
  },
  // {
  //   path: '/profile',
  //   name: 'Profile',
  //   component: Profile
  // }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
