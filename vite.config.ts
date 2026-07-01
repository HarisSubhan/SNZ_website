// vite.config.ts
import { defineConfig } from '@tanstack/start/config'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    tsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
  ],
  // Remove vite-tsconfig-paths plugin if you have it
  // TanStack Start handles this internally
})