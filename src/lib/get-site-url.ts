const ORIGIN_URL = import.meta.env.ORIGIN_URL || process.env.ORIGIN_URL;
const VERCEL_URL = import.meta.env.VERCEL_URL || process.env.VERCEL_URL;

export const getSiteUrl = () => {
  // custom
  if (ORIGIN_URL) {
    return new URL(ORIGIN_URL).toString();
  }
  // vercel
  if (process.env.VERCEL && VERCEL_URL) {
    return new URL(`https://${VERCEL_URL}`).toString();
  }
  return new URL("http://localhost:4321").toString();
};
