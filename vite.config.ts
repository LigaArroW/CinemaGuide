import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  svgr({
    svgrOptions: {
      icon: true,
    },
  })
  ],
  base: '/CinemaGuide/',
  build: {
    rollupOptions: {
      external: /^@svgr\/icon/,
      output: {
        assetFileNames: 'icons/[name].[ext]',
        chunkFileNames: 'chunks/[name]-[hash].js',
        entryFileNames: '[name]-[hash].js',
      },
    },
  },
})
