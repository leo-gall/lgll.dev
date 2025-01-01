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
          class="bg-black/20 text-white p-6 rounded-lg w-full font-mono block"
        >
          <div v-if="blog && blog.title && blog.description">
            <div class="flex justify-between items-center">
              <p class="text-sm">
                {{ blog.date }}
              </p>
              <p class="text-sm">zsh</p>
            </div>
            <div class="mt-4">
              <p class="font-bold text-white">
                <span class="text-green-500">➜ </span>
                <span class="text-sky-600">lgll.dev</span>
                <span class="text-purple-700"> git:(</span>
                <span class="text-red-500">main</span>
                <span class="text-purple-700">)</span>
                <span class="text-yellow-600"> ✗ </span>
                echo
                <span class="font-bold">${{ EnvVar(blog.title) }}</span>
              </p>
              <br />
              <p>
                {{ blog.description }}
              </p>
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

const EnvVar = (str: string) =>
  str.toUpperCase().replace(/ /g, "_").replace(/-/g, "_").replace(/,/g, "");
</script>
