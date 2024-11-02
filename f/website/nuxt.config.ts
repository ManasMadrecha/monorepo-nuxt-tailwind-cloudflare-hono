export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  srcDir: '.',
  dir: {
    app: 'app',
  },
  extends: ["../common/base", { install: true }],
  ssr: true,
  compatibilityDate: "2024-10-30",
  devtools: {
    enabled: false,
  },
  tailwindcss: {
    configPath: "./tailwind.config.ts",
  },
});
