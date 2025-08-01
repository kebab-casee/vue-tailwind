import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    AutoImport({
      imports: ["vue"],
      dts: "src/auto-imports.d.ts",
    }),
  ],
  server: {
    port: 3000,
  },
});
