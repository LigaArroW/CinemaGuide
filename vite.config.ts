import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'


// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: [],
    exclude: [],
  },
  plugins: [react(),
  svgr({
    svgrOptions: {
      icon: true,

    },
  })
  ],
  base: '/CinemaGuide/',

})
