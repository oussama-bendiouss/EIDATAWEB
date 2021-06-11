import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Users from "../views/Users.vue";
import About from "../views/About.vue";
import Add from "../views/Add.vue";
import Genres from "../views/Genres.vue";
import Recommended from "../views/Recommended.vue";
import List from "../views/List.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/add",
    name: "Add a Movie",
    component: Add,
  },
  {
    path: "/genres/:genreName",
    name: "Genres",
    component: Genres,
  },
  {
    path: "/genres",
    redirect: "/genres/Action",
  },
  {
    path: "/recommended",
    name: "Recommended",
    component: Recommended,
  },
  {
    path: "/list",
    name: "List",
    component: List,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
