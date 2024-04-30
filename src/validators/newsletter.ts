import { type Output, object, string, email } from "valibot";

export const SubscribeToNewsletterSchema = object({
  email: string([email()]),
});

export type SubscribeToNewsletterSchema = Output<
  typeof SubscribeToNewsletterSchema
>;
