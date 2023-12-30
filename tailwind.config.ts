import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'contact-img': "url('../public/phoneImg.jpg')",
        'banner-img': "url('../public/banner.jpg')",
      },
    },
    fontFamily: {
      'arial': ['Arial', 'sans-serif'],
    }
  },
  plugins: [],
};

export default config
