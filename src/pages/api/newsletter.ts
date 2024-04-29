import type { APIRoute } from "astro";

export const POST: APIRoute = ({ request }) => {
  //   const { email } = request.body;
  //   TODO validate email
  //   TODO add sendgrid implementation

  return new Response(
    JSON.stringify({
      message: "Thanks for subscribing to our newsletter.",
    }),
  );
};
