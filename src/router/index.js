import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import MyCerty from "../views/MyCerty.vue";
import Admin from "../views/Admin.vue";

Vue.use(VueRouter);
//asd
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/my-certy",
    name: "My Certy",
    component: MyCerty,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/certy/:tokenId",
    name: "Certy",
    component: () => import("../views/Certy.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
