import classnames from "classnames";
import { PropsWithClassName } from "../../lib/types";

export default function PersonIcon({ className }: PropsWithClassName<{}>) {
  return (
    <svg
      className={classnames("sm:w-16 sm:h-16 w-10 h-10", className)}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
