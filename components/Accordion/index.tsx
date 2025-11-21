"use client";

import classNames from "classnames";
import { useState } from "react";

import type { PropsWithChildren } from "react";

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
          "flex justify-between items-center focus:outline-hidden p-3 text-lg",
          headerClassName,
          "bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100",
        )}
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={tabIndex}
      >
        {header}
        <span className="float-right">
          <ChevronIcon
            className={classNames("transition-all duration-300 ease-in-out", {
              "-rotate-90": isOpen,
              "rotate-90": !isOpen,
            })}
          />
        </span>
      </div>
      <div
        className={classNames(
          "overflow-hidden md:overflow-x-hidden transition-all duration-500 ease-in-out border-t pt-1",
          { "h-0": !isOpen, "h-[calc-size(auto,size)]": isOpen },
          bodyClassName,
          "bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200",
        )}
      >
        {children}
      </div>
    </>
  );
}
