import classnames from "classnames";
import { PropsWithClassName } from "../../lib/types";

export default function HeartbeatIcon({ className }: PropsWithClassName<{}>) {
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
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}
