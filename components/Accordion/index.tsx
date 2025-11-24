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
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div
        role="button"
        className={classNames(
          "flex justify-between items-center focus:outline-none p-4 text-xl font-semibold cursor-pointer transition-all duration-200 ease-in-out",
          headerClassName,
          "bg-linear-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 text-gray-900 dark:text-gray-100 hover:from-gray-100 hover:to-gray-50 dark:hover:from-gray-700 dark:hover:to-gray-600",
          "border-b border-gray-200 dark:border-gray-600",
        )}
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={tabIndex}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${header.replace(/\s+/g, "-").toLowerCase()}`}
      >
        <span className="flex-1">{header}</span>
        <span className="ml-4 transition-transform duration-300 ease-in-out">
          <ChevronIcon
            className={classNames(
              "transition-all duration-300 ease-in-out w-5 h-5",
              {
                "rotate-0": isOpen,
                "rotate-180": !isOpen,
              },
            )}
          />
        </span>
      </div>
      <div
        id={`accordion-content-${header.replace(/\s+/g, "-").toLowerCase()}`}
        className={classNames(
          "transition-all duration-300 ease-in-out",
          {
            "max-h-0 opacity-0 overflow-hidden": !isOpen,
            "max-h-[80vh] opacity-100 overflow-y-auto": isOpen,
          },
          bodyClassName,
          "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200",
        )}
        aria-hidden={!isOpen}
      >
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
