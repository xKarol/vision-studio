import { HTTPError } from "ky";
import { useState, type ReactNode } from "react";
import { subscribeToNewsletter } from "~/lib/api/newsletter";

export const Newsletter = ({ children }: { children: ReactNode }) => {
  const [error, setError] = useState<string | undefined>(undefined);
  const [info, setInfo] = useState<string | undefined>(undefined);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      setError(undefined);
      // @ts-expect-error
      const emailValue = e.target.email.value;
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
    <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
      <div className="flex">{children}</div>
      {error !== undefined ? (
        <span className="text-xs text-red-500 uppercase">{error}</span>
      ) : null}
      {info !== undefined ? (
        <span className="text-xs uppercase">{info}</span>
      ) : null}
    </form>
  );
};
