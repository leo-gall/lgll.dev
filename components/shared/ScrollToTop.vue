<template>
  <div>
    <slot />
  </div>

  <div class="flex justify-center">
    <button
      type="button"
      @click="goToTop"
      class="text-white border border-white rounded-full p-1 fixed bottom-6 right-6 bg-white/30 hover:scale-110 transition duration-200"
    >
      <ChevronUpIcon class="w-10 h-10" />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ChevronUpIcon } from "lucide-vue-next";

function goToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<style></style>
