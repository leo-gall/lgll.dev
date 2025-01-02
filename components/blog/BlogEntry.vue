<template>
  <div class="text-white">
    <div v-if="blog">
      <ContentRenderer :value="blog">
        <div class="mb-5">
          <NuxtLink
            class="inline-flex flex-row items-center gap-2 mb-5 border-b-2 border-white pb-2 pr-2"
            to="/blog"
          >
            <ArrowLeftIcon class="w-6 h-6" />
            <span> All Blogs </span>
          </NuxtLink>

          <div class="flex flex-col gap-3 mb-3">
            <Alert v-if="isOutdated" type="warning">
              This post hasn't been updated for more than a year and could be
              outdated!
            </Alert>
            <Alert v-if="!blog.done" type="warning">
              This post is a work in progress and could be incomplete!
            </Alert>
          </div>

          <h1 class="text-4xl font-bold max-w-xl">
            {{ blog.title }}
          </h1>
          <p v-if="blog.updatedAt" class="mt-2">
            Updated at
            <span>
              {{ new Date(blog.updatedAt).toLocaleDateString() }}
            </span>
            <span v-if="blog.updatedAt"> ・ </span>
            <span> {{ readingTime }} min read </span>
          </p>
        </div>
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
import { ArrowLeftIcon, OctagonAlertIcon, PickaxeIcon } from "lucide-vue-next";

const slugParam = useRoute().params.slug;
const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;

const { data: blog } = await useAsyncData("home", () =>
  queryContent("/blog").where({ slug: slug }).findOne()
);

interface Element {
  type: string;
  tag?: string;
  props?: object;
  children?: Array<Element | TextElement>;
}

interface TextElement {
  type: string;
  value: string;
}

const extractText = (elements: Array<Element | TextElement>): string => {
  let textContent = "";

  elements.forEach((element) => {
    if (element.type === "text") {
      // @ts-ignore
      textContent += element.value + " ";
      // @ts-ignore
    } else if (element.children) {
      // @ts-ignore
      textContent += extractText(element.children);
    }
  });

  return textContent.trim();
};

const readingTime = computed(() => {
  const wordsPerMinute = 200;
  const content = extractText(blog.value?.body?.children ?? []);
  const textLength = content.split(" ").length;
  return Math.ceil(textLength / wordsPerMinute);
});

const isOutdated = computed(() => {
  if (!blog.value?.updatedAt) return false;
  const updatedAt = new Date(blog.value.updatedAt);
  const now = new Date();
  const diff = now.getTime() - updatedAt.getTime();
  const days = diff / (1000 * 60 * 60 * 24);
  return days > 365;
});

useHead({
  title: blog?.value?.title ?? "Leo Gall ・ Blog",
});
</script>
