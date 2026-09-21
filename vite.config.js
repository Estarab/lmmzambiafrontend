import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.png','**/*.PNG','**/*.JPEG','**/*.JPG', '**/*.jpg', '**/*.jpeg', '**/*.svg'],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },
  plugins: [react()],
});
