/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cream-bg': '#FFF8E7',
        'dark-blue': '#003049',
        'accent-blue': '#669BBC', 
        'accent-yellow': '#FBCB77',
        'accent-pink': '#F99D90',
        'deep-red': '#9E122C',
      },
      fontFamily: {
        sans: ['var(--font-urbanist)'],
        heading: ['var(--font-fredoka)'],
        script: ['var(--font-petit-formal-script)'], // This matches layout.js now
      },
      backgroundImage: {
        'receipt-jagged': "linear-gradient(135deg, transparent 50%, white 50%), linear-gradient(45deg, white 50%, transparent 50%)",
      }
    },
  },
  plugins: [],
};

export default config;