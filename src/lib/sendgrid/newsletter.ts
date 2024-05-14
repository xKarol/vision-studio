import { sendgridClient } from "./index";

export const subscribeToNewsletter = (email: string) => {
  return sendgridClient.request({
    method: "PUT",
    url: "/v3/marketing/contacts",
    body: {
      contacts: [{ email }],
      list_ids: [import.meta.env.SENDGRID_MAILING_ID],
    },
  });
};
