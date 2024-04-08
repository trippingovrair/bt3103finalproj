import { createRouter, createWebHistory } from "vue-router";
import Login from "@/components/Login.vue";
import Logout from "../components/Logout.vue";
import About from "@/views/About.vue";
import Homepage from "@/views/Homepage.vue";
import ProfileView from "@/views/ProfileView.vue";
import UpdateProfile from "@/views/UpdateProfile.vue";
import PostPage from "@/views/PostPage.vue";

const routes = [
  {
    path: "/", // The root path should only be declared once.
    name: "Login",
    component: Login,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
  {
    path: "/home",
    name: "Home", 
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
  {
    path: "/update-profile", // Add this route for UpdateProfile
    name: "UpdateProfile",
    component: UpdateProfile,
  },
  {
    path: "/post", // Add this route for UpdateProfile
    name: "Post",
    component: PostPage,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;