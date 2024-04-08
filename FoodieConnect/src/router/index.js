import { createRouter, createWebHistory } from "vue-router";
import Login from "@/components/Login.vue";
import About from "@/views/About.vue";
import Homepage from "@/views/Homepage.vue";
import ProfileView from "@/views/ProfileView.vue";

const routes = [
  {
    path: "/", // The root path should only be declared once.
    name: "Login",
    component: Login,
  },
  {
    path: "/homepage",
    name: "Homepage", // Assuming you want to navigate to Home component via '/home' path
    component: Homepage,
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
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
