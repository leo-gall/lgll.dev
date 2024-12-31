<template>
  <div class="text-white">
    <div v-if="blog">
      <ContentRenderer :value="blog">
        <ContentRendererMarkdown
          :value="blog"
          class="prose prose-invert !text-white !font-funnel"
        />
      </ContentRenderer>
    </div>
    <div v-else class="prose prose-invert">
      <h1>It seems like this blog post doesn't exist.</h1>
      <p>
        But the real question is: How did you get here? 🤔 Have you randomly
        typed in a URL? Go spend your time more wisely! For example: Ask
        yourself if anything does really exist or if we're all just a simulation
        in a computer.
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const slugParam = useRoute().params.slug;
const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;

const { data: blog } = await useAsyncData("home", () =>
  queryContent("/blog").where({ slug: slug }).findOne()
);

useHead({
  title: blog?.value?.title ?? "Leo Gall ・ Blog",
});
</script>
