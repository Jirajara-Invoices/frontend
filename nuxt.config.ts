// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Jirajara Invoices App",
      link: [
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons&display=swap",
        },
        {
          rel: "stylesheet",
          href: "/assets/css/MingCute.css",
        },
      ],
    },
    pageTransition: {
      name: "page",
      mode: "in-out",
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@vuestic/nuxt"],
  typescript: {
    typeCheck: true,
    strict: true,
  },
});
