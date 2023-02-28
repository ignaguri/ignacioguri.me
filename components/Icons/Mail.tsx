import classnames from "classnames";
import { PropsWithClassName } from "../../lib/types";

export default function MailIcon({ className }: PropsWithClassName<{}>) {
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
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}