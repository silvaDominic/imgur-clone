import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { loadEnv } from 'vite';

export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    root: path.resolve(__dirname, 'src/presentation'), // Set root to presentation
    build: {
      outDir: path.resolve(__dirname, 'dist/presentation'), // Output directory
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    define: {
      'process.env': env, // Load environment variables from the root .env file
    },
    server: {
      host: '127.0.0.1',  // Set to 127.0.0.1 instead of 'localhost' (fixes request issue with Imgur API)
      port: 5173,
    },
  };
});
