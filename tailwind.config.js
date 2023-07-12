/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whatsapp: "#25D366",
        instagram: "#E4405F",
        twitter: "#1DA1F2",
        fiver: "#00b22d",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
