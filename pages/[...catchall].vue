<template>
  <div class="flex flex-col gap-10 text-white">
    <div>
      <h1 class="text-5xl mb-3 font-bold font-kranky">Error 404</h1>
      <p class="max-w-[40rem] text-xl my-1 font-funnel">
        Is it possible that you took a wrong turn? It seems like the page you're
        looking for doesn't exist. But I'm sure you'll find what you're looking
        somewhere else on my website.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead(() => ({
  status: 404,
  title: "Page not found",
}));
</script>
