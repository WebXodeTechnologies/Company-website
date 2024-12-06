/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // If using `src` directory
  ],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Light theme
        primary: "#1D4ED8",
        secondary: "#9333EA",
        background: "#F9FAFB",
        text: "#1F2937",

        // Dark theme
        dark: {
          primary: "#2563EB",
          secondary: "#7C3AED",
          background: "#1E293B",
          text: "#F9FAFB",
        },
      },
    },
  },
  plugins: [],
};
