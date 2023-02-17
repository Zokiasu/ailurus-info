import { createRouter, createWebHistory } from "vue-router";
import RedPanda from "@/views/RedPanda.vue";
import BlueWhale from "@/views/BlueWhale.vue";
import SnowyOwl from "@/views/SnowyOwl.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/bluewhale",
      name: "BlueWhale",
      component: BlueWhale,
    },
    {
      path: "/",
      name: "RedPanda",
      component: RedPanda,
    },
    {
      path: "/snowyowl",
      name: "SnowyOwl",
      component: SnowyOwl,
    },
  ],
});

export default router;
