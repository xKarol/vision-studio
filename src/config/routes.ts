export const routes = {
  NOT_FOUND: "/404",
  HOME: "/",
  ABOUT: "/about", //TODO not exist
  PORTFOLIO: "/portfolio", // not exist
  FAQ: "/faq", // not exist
  CONTACT: "/contact", // not exist
  socials: {
    INSTAGRAM: "https://instagram.com",
    FACEBOOK: "https://facebook.com",
    PINTEREST: "https://pinterest.com",
  },
  portfolio: {
    DEFAULT: "/portfolio",
    slug: (slug: string) => `/portfolio/${slug}`,
  },
} as const;
