import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const basePath = process.env.VITE_BASE_URL || "/";

export default defineConfig({
  base: "/akzaatzPortfolio/",

  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "src/utils/_variables.scss";
          $VITE_BASE_URL: '${basePath}';
        `,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
