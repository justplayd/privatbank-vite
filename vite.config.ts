import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
  },
  esbuild: {
    // jsxInject: `import * as React from 'react'`
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly'
    },
    preprocessorOptions: {
      scss: {
        // just variables loaded globally
        additionalData:
          '@import "@/assets/styles/base/media-query.scss"; @import "@/assets/styles/base/mixins.scss"; @import "@/assets/styles/base/var.scss";'
      }
    }
  },
  build: {
    cssCodeSplit: false
  },
  optimizeDeps: {
    include: ['@emotion/styled']
  }
});
