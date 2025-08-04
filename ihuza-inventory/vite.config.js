import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'; 


// https://vite.dev/config/
export default defineConfig({
  darkMode: 'class', // important!
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [react(),tailwindcss()],
   resolve: {
    alias: {
       "@components": path.resolve(__dirname, "src/Components"),
    },
  },
})
