import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function transformStoryblokImage(
  url: string,
  width: number,
  height: number,
) {
  return `${url}/m//fit-in/${width}x${height}/filters:quality(100)`;
}
