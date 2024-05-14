import type { SEOProps } from "astro-seo";
import { getSiteUrl } from "~/lib/get-site-url";

const siteUrl = getSiteUrl();
const ogUrl = new URL("/og.png", siteUrl).toString();

const description =
  "Explore moments captured in time through my lens. Experience life's beauty in every frame.";
const title = "Vision Studio";

export const defaultSEOConfig: SEOProps = {
  titleTemplate: "%s — Vision Studio",
  title,
  titleDefault: title,
  description,
  openGraph: {
    optional: {
      description,
    },
    basic: {
      title,
      type: "website",
      image: ogUrl,
    },
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    image: ogUrl,
  },
  extend: {
    meta: [
      {
        name: "theme-color",
        content: "#F6F5F2",
      },
    ],
  },
};
