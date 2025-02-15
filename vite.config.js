import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
  },
  preview: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    allowedHosts: [
      "localhost",
      "127.0.0.1",
      "akzaatz.com",
      ".akzaatz.com",
      ".sslip.io",
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
