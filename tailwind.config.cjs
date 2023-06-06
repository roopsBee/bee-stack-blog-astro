/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      margin: {
        fluidSm: "clamp(0rem, 4vw, 2rem)",
        fluid: "clamp(1rem, 8vw, 4rem)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
