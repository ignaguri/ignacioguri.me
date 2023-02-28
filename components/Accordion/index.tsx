import classnames from "classnames";
import { PropsWithChildren, useRef, useState } from "react";
import ChevronIcon from "../Icons/Chevron";

interface Props extends PropsWithChildren {
  initOpen: boolean;
  header: string;
  headerClassName?: string;
  bodyClassName?: string;
  tabIndex?: number;
}
export default function Accordion({
  initOpen = false,
  header,
  headerClassName,
  bodyClassName,
  tabIndex = 0,
  children,
}: Props) {
  const [isOpen, setIsOpen] = useState(initOpen);
  const ref = useRef<HTMLDivElement>(null);

  const bodyHeight = isOpen
    ? { height: ref.current?.scrollHeight }
    : { height: 0 };

  return (
    <>
      <div
        role="button"
        className={classnames(
          "flex justify-between items-center focus:outline-none p-3",
          headerClassName
        )}
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={tabIndex}
      >
        {header}
        <span className="float-right">
          {isOpen ? (
            <ChevronIcon className="-rotate-90" />
          ) : (
            <ChevronIcon className="rotate-90" />
          )}
        </span>
      </div>
      <div
        className={classnames(
          "overflow-hidden md:overflow-x-hidden transition-height ease duration-300 border-t pt-1",
          bodyClassName
        )}
        ref={ref}
        style={bodyHeight}
      >
        {children}
      </div>
    </>
  );
}
