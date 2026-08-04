/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#020202",
        obsidian: "#080808",
        crimson: {
          DEFAULT: "#9E0A16",
          dark: "#4A040A",
          bright: "#C80018",
          neon: "#E50914",
          blood: "#8A0814",
          subtle: "rgba(158, 10, 22, 0.25)",
        },
        metallic: "#A3A8B0",
        pewter: "#6E727A",
        muted: "#6E727A",
      },
      fontFamily: {
        cinematic: ['"Gotico-Antiqua"', '"Cinzel Decorative"', '"Orbitron"', 'sans-serif'],
        display: ['"Gotico-Antiqua"', '"Orbitron"', '"Outfit"', 'sans-serif'],
        gothic: ['"Gotico-Antiqua"', 'serif'],
        sans: ['"Outfit"', '"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'red-glow': '0 0 20px rgba(158, 10, 22, 0.45)',
        'red-glow-lg': '0 0 35px rgba(200, 0, 24, 0.55), 0 0 15px rgba(138, 8, 20, 0.35)',
        'red-border': 'inset 0 0 15px rgba(158, 10, 22, 0.25)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.95)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 25s linear infinite',
        'spin-reverse': 'spin-reverse 25s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
