import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import ViteSvgSpriteWrapper from "vite-svg-sprite-wrapper";
import svgr from "vite-plugin-svgr";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()
  ],
})
