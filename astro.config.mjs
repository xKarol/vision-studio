import { getSiteUrl } from "./src/lib/get-site-url";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import storyblok from "@storyblok/astro";
import basicSsl from "@vitejs/plugin-basic-ssl";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

const env = loadEnv("", process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  output: "static",
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
    solidJs(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
});
