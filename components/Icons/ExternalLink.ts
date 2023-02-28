import classnames from 'classnames';

export default function ExternalLinkIcon({
  classNames
}: any) {
  return (
    // @ts-expect-error TS(2304): Cannot find name 'svg'.
    <svg
      // @ts-expect-error TS(2304): Cannot find name 'xmlns'.
      xmlns="http://www.w3.org/2000/svg"
      // @ts-expect-error TS(2552): Cannot find name 'className'. Did you mean 'classN... Remove this comment to see the full error message
      className={classnames('h-6 w-6', classNames: any)}
      // @ts-expect-error TS(2304): Cannot find name 'fill'.
      fill="none"
      // @ts-expect-error TS(2304): Cannot find name 'viewBox'.
      viewBox="0 0 24 24"
      // @ts-expect-error TS(2304): Cannot find name 'stroke'.
      stroke="currentColor"
    >
      // @ts-expect-error TS(2304): Cannot find name 'path'.
      <path
        // @ts-expect-error TS(2304): Cannot find name 'strokeLinecap'.
        strokeLinecap="round"
        // @ts-expect-error TS(2304): Cannot find name 'strokeLinejoin'.
        strokeLinejoin="round"
        // @ts-expect-error TS(2304): Cannot find name 'strokeWidth'.
        strokeWidth={2}
        // @ts-expect-error TS(2304): Cannot find name 'd'.
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}
