// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxt/content"],

  css: ["./assets/css/tailwind.css"],

  components: ["~/components"],

  app: {
    head: {
      // Sets favicon (favicon.png)
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
      script: [
        {
          defer: true,
          src: "https://cloud.umami.is/script.js",
          "data-website-id": process.env.UMAMI_ID,
        },
      ],
      htmlAttrs: {
        lang: "en",
      },
    },
  },
});
