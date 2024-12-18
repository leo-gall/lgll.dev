<template>
  <NuxtLink
    :to="`/blog/${link}`"
    class="bg-black/20 text-white p-6 rounded-lg w-full max-w-lg font-mono block"
  >
    <div class="flex justify-between items-center">
      <div class="flex space-x-2 text-red-500">
        <div class="w-3 h-3 rounded-full bg-red-500"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div class="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <p class="text-sm">bash</p>
    </div>
    <div class="mt-4">
      <p class="text-green-400">
        $ docker run <span class="font-bold">"{{ title }}"</span>
      </p>
      <p class="text-white">
        <span class="font-bold">{{ humanReadableDate }}</span
        >: Pulling from lgll/{{ tagifiedTitle }}
      </p>
      <p class="text-white mt-2 font-bold">{{ description }}</p>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
  description: string;
  date: string;
  link: string;
}>();

const tagify = (tag: string) =>
  tag
    .toLowerCase()
    .replaceAll(" ", "-")
    .replaceAll("/", "")
    .replaceAll(".", "");

const humanReadableDate = new Date(props.date).toLocaleDateString();
const tagifiedTitle = tagify(props.title);
</script>
