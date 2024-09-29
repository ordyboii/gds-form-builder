// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@vueuse/nuxt",
    "nuxt-security",
  ],
  runtimeConfig: {
    public: {
      directusApi: process.env.DIRECTUS_API,
    },
  },
});
