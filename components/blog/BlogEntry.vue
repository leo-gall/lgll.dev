<template>
  <div class="text-white">
    <div v-if="blog">
      <ContentRenderer :value="blog">
        <div class="mb-5">
          <NuxtLink
            class="inline-flex flex-row items-center gap-2 mb-5 border-b-2 border-white pb-2 pr-2"
            to="/blog"
          >
            <ArrowLeft class="w-6 h-6" />
            <span> All Blogs </span>
          </NuxtLink>
          <h1 class="text-4xl font-bold">
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
import { ArrowLeft } from "lucide-vue-next";

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

useHead({
  title: blog?.value?.title ?? "Leo Gall ・ Blog",
});
</script>
