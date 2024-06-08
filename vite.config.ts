import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteSvgSpriteWrapper from "vite-svg-sprite-wrapper";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    ViteSvgSpriteWrapper({
      icons: 'src/shared/assets/img/svg/*.svg',
      outputDir: 'src/shared/assets/img'
  })
  ],
})
