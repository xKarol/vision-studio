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
  return `${url}/m/${width}x${height}/filters:quality(${quality}):format(${format})
  `;
}
