import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import styleX from "vite-plugin-stylex";

export default defineConfig(async () => ({
  plugins: [solid(), styleX()],
  build: {
   minify: 'esbuild',
   sourcemap: false,
   assetsDir: 'SetUI',
  },
}));
