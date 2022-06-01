import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import CheckCerty from "../views/CheckCerty.vue";
import ConnectMetamask from "../views/ConnectMetamask.vue";
import Admin from "../views/Admin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/check-certy",
    name: "Check Certy",
    component: CheckCerty,
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
    path: "/connect-metamask",
    name: "Connect Metamask",
    component: ConnectMetamask,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
