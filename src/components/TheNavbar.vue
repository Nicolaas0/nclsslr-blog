<script setup>
import { RouterLink, RouterView } from "vue-router";</script>
<template>
  <div class="flex flex-row justify-around h-12 items-center bg-white cursor">
    

    <RouterLink to="/"><div class="font font-bold text-xl">nclsslr</div></RouterLink>

    <div class="flex flex-row">
      <button class="mr-3 border-2 border-black rounded-md py-1 px-2 font-medium">Login</button>
      <ButtonNav>Register</ButtonNav>
    </div>

  </div>
</template>

<script>
import ButtonNav from './atomic/ButtonNav.vue'
export default {
  components:{ButtonNav}
};
</script>

<style>
</style>