import classnames from "classnames";
import { PropsWithClassName } from "../../lib/types";

export default function ExternalLinkIcon({
  className,
}: PropsWithClassName<{}>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classnames("h-6 w-6", className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}
