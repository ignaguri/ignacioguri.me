import classnames from "classnames";
import { PropsWithChildren, ReactNode } from "react";
import { PropsWithClassName } from "../../lib/types";

interface Props extends PropsWithChildren {
  size: "small" | "medium" | "large";
  type: "primary" | "secondary" | "tertiary";
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

export default function Button({
  className,
  size,
  type,
  iconLeft,
  iconRight,
  children,
}: PropsWithClassName<Props>) {
  const buttonClassnames = classnames(
    "btn",
    {
      "btn-small": size === "small",
      "btn-medium": size === "medium",
      "btn-large": size === "large",
      "btn-primary": type === "primary",
      "btn-secondary": type === "secondary",
      "btn-tertiary": type === "tertiary",
      "with-icon": iconLeft || iconRight,
      "with-icon--left": iconLeft,
      "with-icon--right": iconRight,
    },
    className
  );

  return (
    <button type="button" className={buttonClassnames}>
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
