import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    strictPort: true,
  },
  preview: {
    host: true,
    port: 3000,
    strictPort: true,
    allowedHosts: [
      "e8c4w0os00o04kswc8g4c40k.77.37.124.103.sslip.io",
      "akzaatz.com",
      ".sslip.io", // Permet tous les sous-domaines sslip.io
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$VITE_BASE_URL: '/';`,
        includePaths: [path.resolve(__dirname, "./src")],
      },
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
