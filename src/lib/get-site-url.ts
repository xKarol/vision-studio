export const getSiteUrl = () => {
    // custom
    if (process.env.ORIGIN_URL) {
      return new URL(process.env.ORIGIN_URL).toString();
    }
    // vercel
    if (process.env.VERCEL && process.env.VERCEL_URL) {
      return new URL(`https://${process.env.VERCEL_URL}`).toString();
    }
    return new URL("http://localhost:4321").toString();
  };