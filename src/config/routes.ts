export const routes = {
  NOT_FOUND: "/404",
  HOME: "/",
  ABOUT: "/about", //TODO not exist
  CONTACT: "/contact", // not exist
  socials: {
    INSTAGRAM: "https://instagram.com",
    FACEBOOK: "https://facebook.com",
    PINTEREST: "https://pinterest.com",
  },
  work: {
    DEFAULT: "/work",
    slug: (slug: string) => `/work/${slug}`,
  },
} as const;
