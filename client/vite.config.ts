import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
  build: {
    outDir: "../API/wwwroot",
    chunkSizeWarningLimit: 1500,
    emptyOutDir: true,
  },
  server: {
    port: 3000,
  },
  plugins: [react(), basicSsl()],
});
