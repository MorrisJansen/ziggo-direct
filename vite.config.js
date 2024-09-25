import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [vue()],
  server: {
    watch: {
      usePolling: false,  // Disable polling
    },
    fs: {
      strict: false,  // Prevent too many open file errors
    },
  },
})
