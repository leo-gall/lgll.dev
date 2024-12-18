<template>
  <div class="min-h-screen w-full relative">
    <div class="gradient-layer gradient-1"></div>
    <div class="gradient-layer gradient-2"></div>
    <div class="gradient-layer gradient-3"></div>
    <div
      class="relative z-10 flex flex-col items-center justify-center min-h-screen p-8 py-40"
    >
      <div>
        <slot />
        <LayoutNavigation class="mt-8" />
        <LayoutFooter class="mt-8" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.gradient-layer {
  @apply fixed inset-0;
  background-size: 400% 400%;
}

.gradient-1 {
  @apply bg-gradient-to-r from-orange-500 via-blue-500 to-green-500;
  animation: gradientWave1 14s ease infinite;
}

.gradient-2 {
  @apply bg-gradient-to-b from-yellow-500 via-indigo-500 to-pink-500;
  animation: gradientWave2 17s ease infinite;
  opacity: 0.7;
}

.gradient-3 {
  @apply bg-gradient-to-tl from-red-500 via-teal-500 to-violet-600;
  animation: gradientWave3 19s ease infinite;
  opacity: 0.5;
}

@keyframes gradientWave1 {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes gradientWave2 {
  0%,
  100% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 100%;
  }
}

@keyframes gradientWave3 {
  0%,
  100% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
}
</style>
