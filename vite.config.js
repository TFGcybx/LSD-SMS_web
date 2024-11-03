import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createStyleImportPlugin, VantResolve } from "vite-plugin-style-import"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createStyleImportPlugin({
      resolves: [VantResolve()],
      libs: [
        {
          libraryName: "vant",
          esModule: false,
          resolveStyle: (name) => {return `vant/es/${name}/style`},
        },
      ],
    }),
  ],
})
