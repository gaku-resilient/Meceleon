import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react(),        [
            "@locator/babel-jsx/dist",
            {
              env: "development",
            },
          ],],
          server: {
            hmr: {
      clientPort: 5173, // Adjust if needed
    },
         
          },
          base: '/',
})
