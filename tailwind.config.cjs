/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      padding: {
        fluidSm: "clamp(0rem, 3vw, 1.5rem)",
        fluid: "clamp(1rem, 7vw, 3rem)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
