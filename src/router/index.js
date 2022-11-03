import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About.vue";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/",
      name: "Home",
      component: Home,
    },
  ],
});

export default router;
