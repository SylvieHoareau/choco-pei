import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
 
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    include: [
        'tests/**/*.test.ts?(x)',     // ← garde les tests dans /tests
        'src/**/*.test.ts?(x)',       // ← ajoute ceux dans /src
        'src/**/__tests__/**/*.ts?(x)' // ← ajoute les __tests__ dans src
    ],
  },
})