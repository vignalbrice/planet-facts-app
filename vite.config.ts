import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  mode: "production",
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "~assets": resolve(__dirname, "./src/assets"),
      assets: resolve(__dirname, "public/assets"),
    },
  },
});
