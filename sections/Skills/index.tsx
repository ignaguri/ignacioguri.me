import Accordion from "@components/Accordion";
import { capitalize } from "@lib/stringUtils";
import Image from "next/image";

import type { Logo } from "./logos";

import logos from "./logos";

export default function Skills() {
  return (
    <section className="max-w-sm mt-5 md:max-w-lg lg:max-w-4xl">
      <Accordion header="Skills" initOpen>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
          {logos.map((logo: Logo) => (
            <div
              key={logo.filename}
              className="group flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer"
              title={capitalize(logo.filename)}
            >
              <div className="relative mb-2">
                <Image
                  className="h-12 w-12 sm:h-14 sm:w-14 transition-all duration-300 group-hover:brightness-110"
                  src={`/logos/${logo.filename}.svg`}
                  alt={logo.alt}
                  width={56}
                  height={56}
                  style={{
                    objectFit: "contain",
                    height: "auto",
                  }}
                />
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 text-center leading-tight">
                {capitalize(logo.filename)}
              </span>
            </div>
          ))}
        </div>
      </Accordion>
    </section>
  );
}
