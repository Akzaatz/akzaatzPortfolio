import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sass from "sass";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/AkzaatzPortfolio/",
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/utils/settings.scss";',
      },
    },
  },
});
