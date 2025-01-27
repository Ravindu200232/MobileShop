/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      xs: '600px', // Custom small screen
      sm: '640px', // Default Tailwind small screen
      md: '768px', // Default Tailwind medium screen
    },
  },
  plugins: [],
}