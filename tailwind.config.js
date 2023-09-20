/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    colors: {
      "royalblue-50": "#070715",
      "royalblue-100": "#0E0E29",
      "royalblue-200": "#17163E",
      "royalblue-300": "#1E1D53",
      "royalblue-400": "#252468",
      "royalblue-500": "#2C2B7C",
      "royalblue-600": "#5B59C3",
      "royalblue-700": "#4B48CF",
      "royalblue-800": "#806DD9",
      "royalblue-900": "#A5A4E7",
      "royalblue-950": "#DADAF5",
      "zinc-50": "#09090B",
      "zinc-100": "#18181B",
      "zinc-200": "#27272A",
      "zinc-300": "#3F3F46",
      "zinc-400": "#52525B",
      "zinc-500": "#71717A",
      "zinc-600": "#A1A1AA",
      "zinc-700": "#D4D4D8",
      "zinc-800": "#E4E4E7",
      "zinc-900": "#F4F4F5",
      "zinc-950": "#FAFAFA",
    },
  },
  plugins: [],
};
