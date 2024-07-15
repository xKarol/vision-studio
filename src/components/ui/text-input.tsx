import type { ComponentProps } from "solid-js";
import { cn } from "~/lib/utils";

export interface TextInputProps extends ComponentProps<"input"> {}

export const TextInput = ({
  type = "text",
  class: className,
  ...props
}: TextInputProps) => {
  return (
    <input
      type={type}
      class={cn(
        "flex h-9 w-full border-b uppercase border-black bg-background px-3 py-2 text-xs ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
};
