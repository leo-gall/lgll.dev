<template>
  <div>
    <div class="flex flex-col gap-10 text-white">
      <div>
        <h1 class="text-5xl mb-3 font-bold font-kranky">Blogs & Cheatsheets</h1>
        <p class="max-w-[40rem] text-xl my-1 font-funnel">
          I love sharing knowledge and experiences! Here, you'll find all my
          blog posts and practical guides to help you on your coding journey.
        </p>
      </div>
      <div v-if="(blogs ?? []).length > 0" class="flex flex-col gap-10">
        <NuxtLink
          v-for="(blog, index) in blogs"
          :key="index"
          :to="`/blog/${blog.slug}`"
          class="bg-black/20 text-white p-6 rounded-lg w-full font-mono block hover:bg-gradient-to-tr hover:from-green-600 via-yellow-600 hover:to-blue-600 transition-all duration-100"
        >
          <div v-if="blog && blog.title && blog.description">
            <h2 class="text-2xl font-bold">{{ blog.title }}</h2>
            <p class="mt-2">{{ blog.description }}</p>
            <div class="flex flex-row gap-3 mt-3">
              <div
                class="font-funnel text-md bg-gray-900/20 px-3 py-1 rounded-full"
              >
                {{ new Date(blog.updatedAt).toLocaleDateString() }}
              </div>
            </div>
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
  queryContent("/blog").sort({ date: -1 }).find()
);
</script>
