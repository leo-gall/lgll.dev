<template>
  <div v-if="article">
    <SingleArticle v-if="!isCollectionArticle" :article="article" />
    <CollectionArticle v-else :article="article" />
  </div>
  <div v-else class="prose prose-invert">
    <h1>It seems like this article doesn't exist.</h1>
    <p>
      But the real question is: How did you get here? 🤔 Have you randomly typed
      in a URL? Go spend your time more wisely! For example: Ask yourself if
      anything does really exist or if we're all just a simulation in a
      computer.
    </p>
  </div>
  <ScrollToTop />
</template>

<script lang="ts" setup>
const slugParam = useRoute().params.slug;
const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;

const { data: article } = await useAsyncData("articleEntry", () =>
  queryContent("/articles").where({ slug: slug }).findOne()
);

const isCollectionArticle = computed(() => {
  return article?.value?.collectionArticle ?? false;
});

useHead({
  title: article?.value?.title ?? "Leo Gall ・ Articles",
});
</script>
