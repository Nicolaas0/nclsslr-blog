import { createRouter, createWebHistory } from "vue-router";
import ArticlePreview from "../components/ArticlePreview.vue";
import ArticleDetails from "../components/ArticleDetails.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ArticlePreview,
    },
    {
      path: "/article/:id",
      name: "Details",
      component: ArticleDetails,
    },
  ],
});

export default router;
