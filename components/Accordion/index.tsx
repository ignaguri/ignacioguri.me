import classNames from "classnames";
import { PropsWithChildren, useState } from "react";
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

  return (
    <>
      <div
        role="button"
        className={classNames(
          "flex justify-between items-center focus:outline-none p-3 text-lg",
          headerClassName
        )}
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={tabIndex}
      >
        {header}
        <span className="float-right">
          <ChevronIcon
            className={classNames("transition-transform duration-500 ease", {
              "-rotate-90": isOpen,
              "rotate-90": !isOpen,
            })}
          />
        </span>
      </div>
      <div
        className={classNames(
          "overflow-hidden md:overflow-x-hidden transition-max-height duration-500 ease border-t pt-1",
          { "max-h-0": !isOpen, "max-h-[1024px]": isOpen },
          bodyClassName
        )}
      >
        {children}
      </div>
    </>
  );
}
