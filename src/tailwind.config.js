/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        portfolio: {
          about: "#CFE3E1",         
          skills: "#DCE9CE",        
          projects: "#DED0A6",      
          certifications: "#DEC4C6",
          accent: "#6E9C93",        
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