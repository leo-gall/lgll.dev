<template>
  <div>
    <BlogListHead>
      <div v-if="(blogs ?? []).length > 0" class="flex flex-col gap-10">
        <div v-for="(blog, index) in blogs" :key="index">
          <BlogListItem
            v-if="blog.title && blog.description && blog.date && blog.slug"
            :key="index"
            :title="blog.title"
            :description="blog.description"
            :date="blog.date"
            :link="blog.slug"
          />
        </div>
      </div>
      <div v-else>
        <p class="text-white">No blog posts found.</p>
      </div>
    </BlogListHead>
  </div>
</template>

<script lang="ts" setup>
const { data: blogs } = await useAsyncData("home", () =>
  queryContent("/blog").find()
);
</script>
