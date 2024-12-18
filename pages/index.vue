<template>
  <div class="mx-auto">
    <div class="flex flex-col gap-10 text-white">
      <NuxtImg
        src="/profile-picture.png"
        alt="Leo Gall"
        class="w-40 h-40 rounded-full shadow-xl"
      />
      <div>
        <h1 class="text-5xl mb-3 font-bold font-kranky">Hello, I'm Leo</h1>
        <p
          class="max-w-[40rem] text-xl my-1 font-funnel prose-a:font-bold prose-a:underline"
        >
          I'm a 16 year old student and developer from Germany. I've been coding
          for almost 5 years now and I'm currently passionate about web
          development and design. I'm also interested in machine learning and
          AI. I'm employed (student job) at
          <NuxtLink to="https://gutschik.de" target="_blank"
            >Gutschik Web Solutions</NuxtLink
          >
          as a Frontend Developer. In my free time I'm also working on
          <NuxtLink to="//daytistics.com" target="_blank">Daytistics</NuxtLink>,
          a web app that helps you to track and analyse your daily habits and
          routines.

          <br />
          <br />

          Feel free to contact me if you have any questions or if you want to
          work with me. I'm always open for new projects and collaborations.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Leo Gall - Home",
});
</script>
