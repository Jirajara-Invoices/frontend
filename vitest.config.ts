import { defineConfig } from "vitest/config";
import AutoImport from "unplugin-auto-import/vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        "vue",
        "vitest",
        "vue-router",
        {
          "vuestic-ui": ["VaButton", "VaInput", "VaForm", "VaSelect"],
          nuxt: ["NuxtLink", "Nuxt"],
        },
      ],
      dts: true,
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    deps: {
      fallbackCJS: true,
      interopDefault: true,
    },
  },
});
