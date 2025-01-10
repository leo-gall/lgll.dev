<template>
  <div class="text-white max-w-[22rem]">
    <ContentRenderer :value="article">
      <div class="mb-5">
        <NuxtLink
          class="inline-flex flex-row items-center gap-2 mb-5 border-b-2 border-white pb-2 pr-2"
          to="/articles"
        >
          <ArrowLeftIcon class="w-6 h-6" />
          <span> All Articles </span>
        </NuxtLink>

        <div class="flex flex-col gap-3 mb-3">
          <Alert type="info">
            This is a collection article. This means that it contains multiple
            sub-articles. I use this format primarily for cheat sheets to keep
            them organized and easy to navigate.
          </Alert>
        </div>

        <ArticleWarnings :article="article" class="my-8" />

        <h1 class="text-4xl font-bold max-w-xl font-kranky">
          {{ article.title }}
        </h1>
      </div>

      <ContentRendererMarkdown
        :value="article"
        class="prose prose-invert !text-white !font-funnel"
      />

      <!-- Sub Article Selection -->

      <br />
      <p>Please select the article you want to read from the list below:</p>
      <div class="grid grid-cols-2 gap-3 mt-5">
        <button
          @click="updateCurrentSubArticle(subArticle)"
          v-for="subArticle in subArticles"
          class="bg-gray-900/20 gap-1 p-2 rounded-md hover:scale-105 transition-transform duration-200"
        >
          <h3>{{ subArticle.title }}</h3>
        </button>
      </div>

      <div v-if="currentSubArticle" class="mt-10">
        <h2 class="text-2xl font-bold max-w-xl">
          {{ currentSubArticle.title }}
        </h2>

        <p v-if="currentSubArticle.updatedAt" class="mt-2">
          Updated at
          <span>
            {{ new Date(currentSubArticle.updatedAt).toLocaleDateString() }}
          </span>
        </p>

        <!-- Renderer for the sub-article content -->

        <ContentRendererMarkdown
          :value="currentSubArticle"
          class="prose prose-invert !text-white !font-funnel mt-3"
        />
      </div>
    </ContentRenderer>
  </div>
</template>

<script lang="ts" setup>
import type { ParsedContent } from "@nuxt/content";
import { ArrowLeftIcon } from "lucide-vue-next";

const { article } = defineProps<{
  article: ParsedContent;
}>();

const { data: subArticlesUnsorted } = await useAsyncData(
  "childrenArticles",
  () =>
    queryContent("/articles")
      .where({
        childOf: { $exists: true },
      })
      .sort({ _file: -1 })
      .find()
);

const subArticles = computed(() =>
  subArticlesUnsorted.value?.sort((a, b) => {
    const aFile = a
      ._file!.replace("articles/", "")
      .replace(`${article.slug}/`, "");
    const bFile = b
      ._file!.replace("articles/", "")
      .replace(`${article.slug}/`, "");
    return parseInt(aFile) - parseInt(bFile);
  })
);

async function updateCurrentSubArticle(subArticle: ParsedContent) {
  const route = useRoute();
  const query = { ...route.query, subArticle: subArticle.slug };
  await navigateTo({ path: route.path, query });
}

const currentSubArticle = computed(() => {
  const route = useRoute();
  const subArticleSlug = route.query.subArticle ?? subArticles.value?.[0]?.slug;
  return subArticles.value?.find(
    (subArticle: ParsedContent) => subArticle.slug === subArticleSlug
  );
});
</script>
