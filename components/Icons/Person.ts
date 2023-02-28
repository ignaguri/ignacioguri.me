import classnames from 'classnames';

export default function PersonIcon({
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
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      // @ts-expect-error TS(2304): Cannot find name 'circle'.
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
