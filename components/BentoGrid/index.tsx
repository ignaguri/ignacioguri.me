import classNames from "classnames";

import type { PropsWithClassName } from "@lib/types";
import type { PropsWithChildren } from "react";

export default function BentoGrid({ className, children }: PropsWithClassName<PropsWithChildren>) {
  return (
    <div
      className={classNames(
        "grid w-full gap-3",
        "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
}
