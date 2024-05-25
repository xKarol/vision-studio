export const subscribeToNewsletter = async (email: string) => {
  const response = await fetch("/api/newsletter", {
    method: "POST",
    body: JSON.stringify({ email }),
    headers: {
      "content-type": "application/json",
    },
  });

  const data = (await response.json()) as { message: string };

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};
