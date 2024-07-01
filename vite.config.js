import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sass from "sass";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === "production" ? "/akzaatzPortfolio/" : "/",
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/utils/settings.scss";',
      },
    },
  },
});
