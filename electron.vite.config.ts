import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    build: {
      outDir: 'dist/main',
      lib: {
        entry: './src/main/entrypoint.ts'
      }
    }
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
    build: {
      outDir: 'dist/preload',
      lib: {
        entry: './src/preload/entrypoint.ts'
      }
    }
  },
  renderer: {
    plugins: [react()],
    appType: 'spa',
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/')
      }
    },
    build: {
      sourcemap: true,
      emptyOutDir: true,
      outDir: 'dist/renderer'
    }
  }
})
