import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#0d9488", // Teal for a modern tech feel
        "accent": "#0f172a",  // Deep slate/blue
        "brand-orange": "#ff751f", // Official Geova 'G' Logo Accent

        "background-light": "#f8fafd",
        "background-dark": "#020617",
      },
      fontFamily: {
        "display": ["Public Sans", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
    },
  },
  plugins: [
    forms,
    containerQueries,
    typography,
  ],
}
