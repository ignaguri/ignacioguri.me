import classnames from 'classnames';

export default function ChevronIcon({
  className
}: any) {
  return (
    // @ts-expect-error TS(2304): Cannot find name 'svg'.
    <svg
      // @ts-expect-error TS(7006): Parameter '(Missing)' implicitly has an 'any' type... Remove this comment to see the full error message
      className={classnames('fill-current opacity-75 w-4 h-4', className: any)}
      // @ts-expect-error TS(2304): Cannot find name 'xmlns'.
      xmlns="http://www.w3.org/2000/svg"
      // @ts-expect-error TS(2304): Cannot find name 'viewBox'.
      viewBox="0 0 20 20"
    >
      // @ts-expect-error TS(2304): Cannot find name 'path'.
      <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
    </svg>
  );
}
