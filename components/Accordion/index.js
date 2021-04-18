/* eslint-disable jsx-a11y/click-events-have-key-events */
import classnames from 'classnames';
import { useRef, useState } from 'react';
import ChevronIcon from '../Icons/Chevron';

export default function Accordion({
  initOpen,
  header,
  headerClassName,
  bodyClassName,
  tabIndex,
  children,
}) {
  const [isOpen, setIsOpen] = useState(initOpen);
  const ref = useRef();

  const bodyHeight = isOpen
    ? { height: ref.current?.scrollHeight }
    : { height: 0 };

  return (
    <div>
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
        <span className="float-right">
          {isOpen ? (
            <ChevronIcon className="transform -rotate-90" />
          ) : (
            <ChevronIcon className="transform rotate-90" />
          )}
        </span>
      </div>
      <div
        className={classnames(
          'overflow-hidden md:overflow-x-hidden transition-height ease duration-300',
          bodyClassName
        )}
        ref={ref}
        style={bodyHeight}
      >
        {children}
      </div>
    </div>
  );
}

Accordion.defaultProps = {
  initOpen: false,
  tabIndex: 0,
};
