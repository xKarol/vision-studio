export const subscribeToNewsletter = async (email: string) => {
  const res = await fetch("/api/newsletter", {
    method: "POST",
    body: JSON.stringify({
      email: email,
    }),
  });
  const data = await res.json();
  return data as { message: string };
};
