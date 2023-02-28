/* eslint-disable jsx-a11y/click-events-have-key-events */
import classnames from 'classnames';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useRef, useState } from 'react';
import ChevronIcon from '../Icons/Chevron';

export default function Accordion({
  initOpen,
  header,
  headerClassName,
  bodyClassName,
  tabIndex,
  children
}: any) {
  const [isOpen, setIsOpen] = useState(initOpen);
  const ref = useRef();

  const bodyHeight = isOpen
    ? { height: ref.current?.scrollHeight }
    : { height: 0 };

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      <div
        role="button"
        className={classnames(
          'flex justify-between items-center focus:outline-none p-3',
          headerClassName
        )}
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={tabIndex}
      >
        {header}
        {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <span className="float-right">
          {isOpen ? (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ChevronIcon className="-rotate-90" />
          ) : (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ChevronIcon className="rotate-90" />
          )}
        {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        </span>
      {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      </div>
      {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      <div
        className={classnames(
          'overflow-hidden md:overflow-x-hidden transition-height ease duration-300 border-t pt-1',
          bodyClassName
        )}
        ref={ref}
        style={bodyHeight}
      >
        {children}
      {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      </div>
    </>
  );
}

Accordion.defaultProps = {
  initOpen: false,
  tabIndex: 0,
};
