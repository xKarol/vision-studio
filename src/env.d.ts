/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly ORIGIN_URL: string;
  readonly STORYBLOK_TOKEN: string;
  readonly SENDGRID_API_KEY: string;
  readonly SENDGRID_MAILING_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
