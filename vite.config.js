import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const basePath = process.env.VITE_BASE_URL || "/";

export default defineConfig({
  base: "/", // Correct pour un déploiement sur domaine racine
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    // Optimisations pour la production
    minify: "terser",
    sourcemap: false,
    // Configuration pour améliorer le chargement
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
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

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import path from "path";

// const basePath = process.env.VITE_BASE_URL || "/";

// export default defineConfig({
//   // base: "/akzaatzPortfolio/",
//   base: "/",
//   plugins: [react()],
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `
//           @import "src/utils/_variables.scss";
//           $VITE_BASE_URL: '${basePath}';
//         `,
//       },
//     },
//   },
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// });
