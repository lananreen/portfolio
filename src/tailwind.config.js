/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        portfolio: {
          about: "#FFFFFF",
          skills: "#F5F0D7",
          projects: "#FFFFFF",
          certifications: "#F5F0D7",
          accent: "#9CA3AF",
          yellow: "#F1E19A",
        },
      },
      borderRadius: {
        tab: "1rem",
      },
    },
  },
  plugins: [],
};