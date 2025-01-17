import type { Config } from 'tailwindcss'
import { themeExtend } from './config/tailwindcss.config'

export default {
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: themeExtend,
  },
  plugins: [],
} satisfies Config
