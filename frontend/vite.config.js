import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/business-data': 'http://localhost:4000',
      '/regenerate-headline': 'http://localhost:4000'
    }
  }
});
