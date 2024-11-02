// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  srcDir: '.',
  dir: {
    app: 'app',
  },
  extends: [
    ["../../common/base"],
  ],
  ssr: false,
  devtools: { enabled: false },
  compatibilityDate: "2024-10-31",
  css: [
    "./assets/styles/main.scss",
  ],
  modules: [
    "@vite-pwa/nuxt",
  ],
  tailwindcss: {
    configPath: "./tailwind.config.ts",
  },
  pwa: {
    manifest: {
      name: "App 1",
      short_name: "App 1",
      description: "App 1",
      theme_color: "#ffffff",
      icons: [
        {
          src: "/icons/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
      ],
      start_url: "/",
      display: "standalone",
      background_color: "#ffffff",
      orientation: "portrait",
    },
  },
})
