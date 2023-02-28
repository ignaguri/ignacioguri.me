import classnames from 'classnames';

export default function HeartbeatIcon({
  className
}: any) {
  return (
    // @ts-expect-error TS(2304): Cannot find name 'svg'.
    <svg
      // @ts-expect-error TS(7006): Parameter '(Missing)' implicitly has an 'any' type... Remove this comment to see the full error message
      className={classnames('sm:w-16 sm:h-16 w-10 h-10', className: any)}
      // @ts-expect-error TS(2304): Cannot find name 'fill'.
      fill="none"
      // @ts-expect-error TS(2304): Cannot find name 'stroke'.
      stroke="currentColor"
      // @ts-expect-error TS(2304): Cannot find name 'strokeLinecap'.
      strokeLinecap="round"
      // @ts-expect-error TS(2304): Cannot find name 'strokeLinejoin'.
      strokeLinejoin="round"
      // @ts-expect-error TS(2304): Cannot find name 'strokeWidth'.
      strokeWidth="2"
      // @ts-expect-error TS(2304): Cannot find name 'viewBox'.
      viewBox="0 0 24 24"
    >
      // @ts-expect-error TS(2304): Cannot find name 'path'.
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}
