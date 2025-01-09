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
          development, app development and design. I'm employed (student job) at
          <NuxtLink
            to="https://kickserve.de"
            target="_blank"
            data-umami-event="about-redirect-gutschik"
            >KickServe GmbH</NuxtLink
          >
          as a Web Developer. In my free time I'm also working on
          <NuxtLink
            to="https://daytistics.com"
            target="_blank"
            data-umami-event="about-redirect-daytistics"
            >Daytistics</NuxtLink
          >, a mobile app that helps you to track and analyse your daily habits
          and routines.
        </p>
      </div>
    </div>
  </div>
</template>
