import Colors from 'tailwindcss/colors'
import type { Config } from 'tailwindcss'
import themeColor from './theme/themeColor'
import { themeExtend } from './config/tailwindcss.config'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      ...themeExtend,
      colors: {
        ...Colors,
        ...themeColor,
      },
    },
  },
  plugins: [],
} satisfies Config
