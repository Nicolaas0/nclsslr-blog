<script setup>
import { RouterLink, RouterView } from "vue-router";
import TheNavbar from "./components/TheNavbar.vue";
import ArticlePreview from "./components/ArticlePreview.vue";
import ArticleDetails from "./components/ArticleDetails.vue";
</script>

<template>
  <div class="m-0 p-0 h-screen w-screen">
    <TheNavbar />
    <div class="flex flex-col justify-start items-center h-full my-2">
      <RouterView/>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: { TheNavbar, ArticlePreview, ArticleDetails },
};
</script>