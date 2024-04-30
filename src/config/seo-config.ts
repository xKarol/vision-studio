import type { SEOProps } from "astro-seo";
import { getSiteUrl } from "~/lib/get-site-url";

const siteUrl = getSiteUrl();
const ogUrl = new URL("/og.png", siteUrl).toString();

const description = "Lorem ipsum";
const title = "Photo";

export const defaultSEOConfig: SEOProps = {
  titleTemplate: "%s — Photo",
  title: title,
  titleDefault: title,
  description: description,
  openGraph: {
    optional: {
      description: description,
    },
    basic: {
      title: title,
      type: "website",
      image: ogUrl,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    image: ogUrl,
  },
  extend: {
    meta: [
      {
        name: "theme-color",
        content: "#ffffff",
      },
    ],
  },
};
