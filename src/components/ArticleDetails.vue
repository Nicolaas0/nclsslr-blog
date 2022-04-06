<template>
  <div class="flex flex-col justfiy-center items-center w-3/4">
    <div class="text-lg font-bold text-2xl mb-3">{{ data.articles[id].title }}</div>
    <img v-bind:src="data.articles[id].imageUrl" alt="" class="my-1 rounded-md" />
    <div
      class="font-semibold rounded-md text-white bg-black px-2 cursor-pointer my-2"
    >{{ findCategories(data.articles[id].category, data.categories) }}</div>
    <div class="font-semibold">{{ convertHTML(data.articles[id].content) }}</div>
  </div>
</template>

<script>
import { data } from '../data'
export default {
  data() {
    return {
      data,
      id: this.$route.params.id - 1
    };
  },
  methods: {
    convertHTML(a) {
      var wrapper = document.createElement('div');
      wrapper.innerHTML = a;
      console.log(wrapper.firstChild)
      return wrapper.firstChild.innerHTML;
    },
    findCategories(cid, arr) {
      let category = arr.find(el => el.id === cid)
      return category.name
    }
  },
};
</script>