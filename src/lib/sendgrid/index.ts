import client from "@sendgrid/client";

client.setApiKey(import.meta.env.SENDGRID_API_KEY);

export const sendgridClient = client;
