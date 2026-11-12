import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/lib/index.ts',
      formats: ['es', 'cjs'],
      fileName: 'index'
    },
    rolldownOptions: {
      external: ['react', 'react/jsx-runtime'],
      // Babel 時代の CJS 出力と同じく require('react-zangief').default で使えるようにするため
      output: { exports: 'named' }
    }
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts']
  }
})
