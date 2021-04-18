import classnames from 'classnames';
import { useRef } from 'react';
import ChevronIcon from '../Icons/Chevron';

export const Accordion = ({ id, isOpen, className, children }) => {
  const ref = useRef();
  const style =
    isOpen === id ? { height: ref.current?.scrollHeight } : { height: 0 };

  return (
    <div
      id={id}
      className={classnames(
        'overflow-hidden md:overflow-x-hidden transition-height ease duration-300 text-gray-600',
        className
      )}
      ref={ref}
      style={style}
    >
      {children}
    </div>
  );
};

export const AccordionHeader = ({
  accordionId,
  id,
  className,
  onClick,
  children,
}) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  <div
    role="button"
    className={classnames(
      'block focus:outline-none bg-gray-800 text-white border-b my-2 p-3',
      className
    )}
    onClick={onClick}
    tabIndex={id}
  >
    {children}
    <span className="float-right">
      {accordionId === id ? (
        <ChevronIcon className="transform -rotate-90" />
      ) : (
        <ChevronIcon className="transform rotate-90" />
      )}
    </span>
  </div>
);
