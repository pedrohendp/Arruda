import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Base path for GitHub Pages (repository name)
  base: process.env.GITHUB_ACTIONS ? '/Arruda/' : '/',
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5150',
        changeOrigin: true,
      },
    },
  },
})
