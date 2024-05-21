import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function transformStoryblokImage(
  url: string,
  options: {
    width: number;
    height?: number;
    quality?: number;
    format?: "jpg" | "avif" | "webp" | "png";
  },
) {
  const { width, height = 0, quality = 80, format = "avif" } = options;
  const rawUrl =
    url.indexOf("/m/") === -1 ? url : url.slice(0, url.indexOf("/m/"));

  const buildUrl = `${rawUrl}/m/${width}x${height}/filters:quality(${quality}):format(${format})`;
  return buildUrl;
}
