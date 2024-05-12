import { getSiteUrl } from "./src/lib/get-site-url";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import storyblok from "@storyblok/astro";
import basicSsl from "@vitejs/plugin-basic-ssl";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

const env = loadEnv("", process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: vercel(),
  site: getSiteUrl(),
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {},
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
});
