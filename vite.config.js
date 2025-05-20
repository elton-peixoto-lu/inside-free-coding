import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { open: true },
  test: {
    include: ['src/**/*.test.{js,jsx,ts,tsx}'],
    exclude: [
      'tests-backend/**',
      'node_modules',
      'dist',
      '.git',
    ],
    environment: 'jsdom',
  },
});
