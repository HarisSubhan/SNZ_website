// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    // Remove vite-tsconfig-paths plugin and use native support
    tsconfigPaths: true, // Add this instead of the plugin
  },
  // Add proper SSR configuration
  ssr: {
    // Specify which files should be treated as SSR entry
    noExternal: true, // or specify specific packages
  },
  // Ensure build configuration is correct
  build: {
    // For SSR, don't specify an HTML entry
    rollupOptions: {
      input: {
        // Remove any HTML entry here if present
        // Only keep JS/TS entries for SSR
      },
      output: {
        // Configure output properly
      },
    },
  },
})