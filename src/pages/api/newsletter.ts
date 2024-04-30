import type { APIRoute } from "astro";
import { parse, ValiError } from "valibot";
import { SubscribeToNewsletterSchema } from "~/validators/newsletter";

export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get("Content-Type") !== "application/json") {
    return new Response(
      JSON.stringify({
        error: "Please provide an email.",
      }),
      {
        status: 400,
      },
    );
  }
  const body = await request.json();

  try {
    parse(SubscribeToNewsletterSchema, body);
    //   TODO add sendgrid implementation

    return new Response(
      JSON.stringify({
        message: "Thanks for subscribing to our newsletter.",
      }),
    );
  } catch (error) {
    let errMsg = "Something went wrong...";
    if (error instanceof ValiError) {
      errMsg = error.message;
    }
    return new Response(
      JSON.stringify({
        message: errMsg,
      }),
      {
        status: 400,
      },
    );
  }
};
