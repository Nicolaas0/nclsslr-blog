/* eslint-disable vue/valid-v-for */
<script setup>
import { RouterLink, RouterView } from "vue-router";</script>
<template>
  <div
    class="tablet:w-2/4 h-1/4 flex flex-row justify-center items-center border-2 px-2 my-1 rounded-lg"
    v-for="(value) in data.articles"
    :key="data.articles.id"
  >
    <img v-bind:src="value.imageUrl" alt class="h-2/3 w-1/4 mr-4" />

    <div class="flex-col h-fit">
      <RouterLink :to="/article/ + value.id">
        <div class="text-black font-bold text-lg xsm:text-md">{{ value.title }}</div>
      </RouterLink>

      <div class="mt-2 mb-5 xsm:hidden tablet:hidden laptop:block">
        {{
          slice(
            value.desc
          )
        }}
      </div>
      <div class="flex flex-row justify-start items-center my-2">
        <a class="tablet:opacity-50 font-semibold mx-4 cursor-pointer xsm:text-sm">{{ value.writer }}</a>
        <a
          class="font-semibold rounded-md text-white bg-black px-2 cursor-pointer xsm:px-1"
        >{{ findCategories(value.category, data.categories) }}</a>
        <a class="tablet:opacity-50 font-semibold mx-4 cursor-pointer xsm:hidden">{{ value.created_at }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { data } from "../data";

export default {

  data() {
    return {
      data,
    };
  },
  methods: {
    slice(txt) {
      let fixed = txt.slice(0, 149);
      return fixed;
    },
    findCategories(cid, arr) {
      let category = arr.find(el => el.id === cid)
      return category.name
    }
  },
};
</script>

<style>
</style>