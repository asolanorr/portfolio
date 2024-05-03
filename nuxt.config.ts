// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  alias: {
    "@": "./",
  },
  components: {
    dirs: ["~/components"],
  },
  css: ["~/assets/css/reset.css", "~/assets/css/main.css"],
  modules: ["@vueuse/nuxt", "nuxt-resend"],
  buildModules: ["@vueuse/nuxt"],
  runtimeConfig: {
    appURL: process.env.NUXT_APP_URL,
    resendApiKey: process.env.NUXT_RESEND_API_KEY,
  }
});