import { Button } from "./ui/button";
import { TextInput } from "./ui/text-input";

export const Newsletter = () => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    try {
      console.log("submitted");
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
