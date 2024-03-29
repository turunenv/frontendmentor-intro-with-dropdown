import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/frontendmentor-intro-with-dropdown/',
  test: {
    globals: true,
    environment: 'jsdom'
  }
})
