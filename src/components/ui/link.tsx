import { buttonVariants } from "./button";
import type { VariantProps } from "class-variance-authority";
import type { Component, ComponentProps } from "solid-js";
import { splitProps } from "solid-js";
import { cn } from "~/lib/utils";

export interface LinkProps
  extends ComponentProps<"a">,
    VariantProps<typeof buttonVariants> {}

const Link: Component<LinkProps> = (props) => {
  const [, rest] = splitProps(props, ["variant", "size", "class"]);
  return (
    <a
      class={cn(
        buttonVariants({ variant: props.variant, size: props.size }),
        props.class,
      )}
      {...rest}
    />
  );
};

export { Link };
