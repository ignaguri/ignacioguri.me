import classNames from "classnames";

import type { PropsWithChildren } from "react";

interface BentoTileProps extends PropsWithChildren {
  colSpan?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
  tone?: "default" | "muted" | "inverted";
  className?: string;
}

export default function BentoTile({
  colSpan = 1,
  rowSpan = 1,
  tone = "default",
  className,
  children,
}: BentoTileProps) {
  return (
    <div
      className={classNames(
        "rounded-xl border border-line p-4",
        {
          "sm:col-span-2 lg:col-span-2": colSpan === 2,
          "sm:col-span-2 lg:col-span-3": colSpan === 3,
          "lg:row-span-2": rowSpan === 2,
          "bg-surface": tone === "default",
          "bg-paper": tone === "muted",
          "border-ink bg-ink text-paper": tone === "inverted",
        },
        className,
      )}
    >
      {children}
    </div>
  );
}
