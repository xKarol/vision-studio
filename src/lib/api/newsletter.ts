import ky from "ky";

export const subscribeToNewsletter = async (email: string) => {
  const data = await ky
    .post("/api/newsletter", {
      json: { email },
    })
    .json();
  return data as { message: string };
};
