import { Button } from "./ui/button";
import { TextInput } from "./ui/text-input";
import { HTTPError } from "ky";
import { useState } from "react";
import { subscribeToNewsletter } from "~/lib/api/newsletter";

export const Newsletter = () => {
  const [error, setError] = useState<string | undefined>(undefined);
  const [info, setInfo] = useState<string | undefined>(undefined);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      // @ts-ignore
      const emailValue = e.target.email.value;
      const data = await subscribeToNewsletter(emailValue);
      setInfo(data.message);
      setError(undefined);
    } catch (error) {
      let message = "Something went wrong...";
      if (error instanceof HTTPError) {
        const res = await error.response.json();
        message = res.message;
      }
      setError(message);
    }
  };

  return (
    <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
      <div className="flex">
        <TextInput type="text" placeholder="Enter your email" name="email" />
        <Button variant="outline" size="sm">
          Subscribe
        </Button>
      </div>
      {error !== undefined ? (
        <span className="text-xs text-red-500 uppercase">{error}</span>
      ) : null}
      {info !== undefined ? (
        <span className="text-xs uppercase">{info}</span>
      ) : null}
    </form>
  );
};
