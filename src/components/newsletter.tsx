import { HTTPError } from "ky";
import { createSignal, type ComponentProps } from "solid-js";
import { subscribeToNewsletter } from "~/lib/api/newsletter";

export interface NewsletterProps extends ComponentProps<"form"> {}

export const Newsletter = ({ children }: NewsletterProps) => {
  const [error, setError] = createSignal<string | undefined>(undefined);
  const [info, setInfo] = createSignal<string | undefined>(undefined);

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    try {
      setError(undefined);
      const target = e.target as HTMLFormElement;
      const emailValue = (
        target.elements.namedItem("email") as HTMLInputElement
      ).value;
      const data = await subscribeToNewsletter(emailValue);
      setInfo(data.message);
    } catch (err) {
      let message = "Something went wrong...";
      if (err instanceof HTTPError) {
        const res = await err.response.json();
        message = res.message;
      }
      setError(message);
    }
  };

  return (
    <form class="flex flex-col space-y-2" onSubmit={handleSubmit}>
      <div class="flex">{children}</div>
      {error() !== undefined ? (
        <span class="text-xs text-red-500 uppercase">{error()}</span>
      ) : null}
      {info() !== undefined ? (
        <span class="text-xs uppercase">{info()}</span>
      ) : null}
    </form>
  );
};
