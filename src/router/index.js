import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LabTerminalView from "../views/LabTerminalView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return {
        el: to.hash,
        top: 100,
        behavior: "smooth"
      };
    }

    return {
      top: 0,
      behavior: "smooth"
    };
  },

  routes: [
    {
      path: "/",
      component: () => import("../layouts/DefaultLayout.vue"),
      children: [
        {
          path: "",
          component: HomeView
        },
        {
          path: "hobbies",
          component: () => import("../views/DiaryView.vue")
        },
        {
          path: "lab",
          name: "lab",
          component: LabTerminalView
        }
      ]
    }
  ]
});

export default router;