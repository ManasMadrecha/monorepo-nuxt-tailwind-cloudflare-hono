import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  compatibilityDate: "2024-10-30",
  components: [
    { path: './components', prefix: 'Base' },
  ],
  css: [
    join(currentDir, "./assets/styles/auto-generated/google-fonts.css"),
  ],
  modules: [
    ["@nuxtjs/tailwindcss", {
      cssPath: join(currentDir, "./assets/styles/main.scss"),
      viewer: false,
    }],
    ["@nuxtjs/google-fonts", {
      download: true,
      prefetch: true,
      preconnect: true,
      families: {
        SUSE: {
          wght: '100..800',
        },
      },
      display: 'swap',
      outputDir: join(currentDir, "assets"),
      stylePath: join(currentDir, "assets/styles/auto-generated/google-fonts.css"),
      fontsDir: join(currentDir, "assets/fonts"),
      fontsPath: "../fonts",
    }],
    "@pinia/nuxt",
    "@vueuse/nuxt",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          // additionalData: '@use "~/assets/styles/_variables.scss" as *;',
        }
      }
    },
  }
});

