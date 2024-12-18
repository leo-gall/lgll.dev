<template>
  <div>
    <div class="flex flex-col gap-10 text-white">
      <div>
        <h1 class="text-5xl mb-3 font-bold font-kranky">Blogs & Cheatsheets</h1>
        <p class="max-w-[40rem] text-xl my-1 font-funnel">
          I don’t really love writing. But I enjoy sharing my missteps so you
          can learn from them. Here, you’ll find all my blog posts.
        </p>
      </div>
      <div v-if="(blogs ?? []).length > 0" class="flex flex-col gap-10">
        <NuxtLink
          v-for="(blog, index) in blogs"
          :key="index"
          :to="`/blog/${blog.slug}`"
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
              $ docker run <span class="font-bold">"{{ blog.title }}"</span>
            </p>
            <p class="text-white">
              <span class="font-bold">{{
                new Date(blog.date).toLocaleDateString()
              }}</span
              >: Pulling from lgll/{{ tagify(blog.title as string) }}
            </p>
            <p class="text-white mt-2 font-bold">{{ blog.description }}</p>
          </div>
        </NuxtLink>
      </div>
      <div v-else>
        <p class="text-white">No blog posts found.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: blogs } = await useAsyncData("home", () =>
  queryContent("/blog").find()
);

const tagify = (tag: string) =>
  tag
    .toLowerCase()
    .replaceAll(" ", "-")
    .replaceAll("/", "")
    .replaceAll(".", "");

useHead({
  title: "Leo Gall - Blog",
});
</script>
