import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // "@components": path.resolve(__dirname, "src/components"),
      // "@hook": path.resolve(__dirname, "src/hook"),
      // "@components": path.resolve(__dirname, "src/services"),
      // "@pages": path.resolve(__dirname, "src/pages"),
      // "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
});
