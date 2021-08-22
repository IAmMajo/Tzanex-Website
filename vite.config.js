import { defineConfig } from "vite";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
  build: { outDir: "docs" },
  plugins: [viteImagemin()],
});
