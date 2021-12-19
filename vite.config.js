import { defineConfig } from "vite";
import compress from "vite-plugin-compress";

export default defineConfig({
  build: { outDir: "docs" },
  plugins: [compress({ brotli: false })],
});
