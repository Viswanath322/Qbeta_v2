import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import viteTsconfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // TanStack Start full-stack plugin (includes router codegen + SSR)
    tanstackStart({
      server: { entry: "src/server.ts" },
    }),
    // Vercel Build Output API (.vercel/output)
    nitro({ preset: "vercel" }),
    react(),
    tailwindcss(),
    viteTsconfigPaths(),
  ],
  server: {
    port: 5173,
    host: true,
  },
});
