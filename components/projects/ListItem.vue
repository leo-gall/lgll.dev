<template>
  <!-- <NuxtLink
    :to="link"
    class="flex gap-4 bg-gray-900/20 p-4 rounded-xl shadow-xl"
    :class="{ 'flex-row-reverse': reverse, 'flex-row': !reverse }"
  >
    <NuxtImg :src="image" alt="Projects" class="w-28 h-28 rounded-full" />
    <div>
      <h2 class="text-3xl font-bold">{{ title }}</h2>
      <p class="max-w-[30rem] text-lg my-1 font-funnel">
        {{ description }}
      </p>
    </div>
  </NuxtLink> -->
  <div
    class="bg-black/20 text-white px-6 pt-6 pb-0 rounded-lg w-full max-w-lg font-mono block"
  >
    <div class="flex justify-between items-center">
      <div class="flex space-x-2 text-red-500">
        <div class="w-3 h-3 rounded-full bg-red-500"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div class="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <p class="text-lg font-bold">{{ title }}</p>
    </div>
    <div>
      <NuxtImg :src="image" class="rounded-xl mt-4" width="800" height="400" />
    </div>
    <div
      class="relative -top-5 flex flex-row justify-center items-center text-black"
    >
      <NuxtLink
        :to="link"
        class="bg-white px-4 py-2 rounded-lg hover:-translate-y-1 transition border-black border-2 duration-200"
      >
        <Paperclip class="w-6 h-6 inline" />
        <span> Learn more </span>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Paperclip } from "lucide-vue-next";

defineProps<{
  title: string;
  description: string;
  image: string;
  link: string;
  reverse?: boolean;
}>();
</script>
