import { Button } from "./ui/button";
import { TextInput } from "./ui/text-input";

export const Newsletter = () => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({
          email: "test@mail.com",
        }),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <TextInput type="text" placeholder="Enter your email" />
      <Button>Submit</Button>
    </form>
  );
};
