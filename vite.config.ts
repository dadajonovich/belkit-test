import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: path.join(__dirname, 'docs'),
    rollupOptions: {
      input: {
        file1: path.resolve(__dirname, 'index.html'),
      },
    },
  },
});
