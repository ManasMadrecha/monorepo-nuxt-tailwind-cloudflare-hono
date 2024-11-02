import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import daisyui from 'daisyui'
import animate from 'tailwindcss-animate'
import typography from '@tailwindcss/typography'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  content: [
    "./assets/styles/**/*.{css,scss}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        suse: ['SUSE', ...fontFamily.sans],
      },
      colors: {
        primary: colors.amber,
        secondary: colors.lime,
        surface: colors.neutral,
      },
    },
  },
  daisyui: {
    themes: [],
    prefix: 'daisy-',
  },
  plugins: [
    animate,
    daisyui,
    typography,
  ],
}