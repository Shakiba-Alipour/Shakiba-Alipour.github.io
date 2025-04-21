import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Shakiba-Alipour.github.io/",
  server: {
    port: 5173,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
