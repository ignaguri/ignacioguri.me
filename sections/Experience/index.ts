import Image from 'next/image';
// @ts-expect-error TS(6142): Module '../../components/Accordion' was resolved t... Remove this comment to see the full error message
import Accordion from '../../components/Accordion';

export default function Experience() {
  return (
    // @ts-expect-error TS(2552): Cannot find name 'section'. Did you mean 'Selectio... Remove this comment to see the full error message
    <section className="max-w-sm mt-4 md:max-w-lg lg:max-w-4xl">
      // @ts-expect-error TS(2709): Cannot use namespace 'Accordion' as a type.
      <Accordion header="Experience" headerClassName="text-lg" initOpen>
        // @ts-expect-error TS(2304): Cannot find name 'ul'.
        <ul className="mt-2">
          // @ts-expect-error TS(2304): Cannot find name 'li'.
          <li>
            // @ts-expect-error TS(2304): Cannot find name 'div'.
            <div className="flex justify-around items-center md:justify-start">
              // @ts-expect-error TS(2749): 'Image' refers to a value, but is being used as a ... Remove this comment to see the full error message
              <Image
                // @ts-expect-error TS(2304): Cannot find name 'className'.
                className="h-8 w-40"
                // @ts-expect-error TS(2304): Cannot find name 'src'.
                src="/logos/doctari_pro.png"
                // @ts-expect-error TS(2304): Cannot find name 'alt'.
                alt="Doctari"
                // @ts-expect-error TS(2304): Cannot find name 'height'.
                height={30}
                // @ts-expect-error TS(2304): Cannot find name 'width'.
                width={160}
              />
              // @ts-expect-error TS(2304): Cannot find name 'a'.
              <a
                // @ts-expect-error TS(2304): Cannot find name 'className'.
                className="text-base text-gray-900 font-medium m-1 md:ml-8 lg:ml-16"
                // @ts-expect-error TS(2304): Cannot find name 'href'.
                href="https://www.linkedin.com/company/doctari-group/"
                // @ts-expect-error TS(2304): Cannot find name 'rel'.
                rel="noopener noreferrer"
              >
                // @ts-expect-error TS(2304): Cannot find name 'Doctari'.
                Doctari&nbsp;Group
              </a>
            </div>
            // @ts-expect-error TS(2304): Cannot find name 'p'.
            <p className="text-base text-gray-700 text-left m-1">
              // @ts-expect-error TS(2304): Cannot find name 'Working'.
              Working on a platform for hospitals and clinics, to easily hire
              // @ts-expect-error TS(2304): Cannot find name 'doctors'.
              doctors and caregivers all throughout Germany.
            </p>
            // @ts-expect-error TS(2304): Cannot find name 'h3'.
            <h3 className="text-base text-gray-500 text-left m-1 ml-0">
              // @ts-expect-error TS(2304): Cannot find name 'Positions'.
              Positions
            </h3>
            // @ts-expect-error TS(2304): Cannot find name 'ul'.
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-800 italic m-1">
              // @ts-expect-error TS(2304): Cannot find name 'li'.
              <li className="list-item">
                // @ts-expect-error TS(2304): Cannot find name 'Fullstack'.
                Fullstack TypeScript Developer | Sep 2021 - Present
              </li>
            </ul>
            // @ts-expect-error TS(2304): Cannot find name 'h3'.
            <h3 className="text-base text-gray-500 text-left m-1 ml-0">
              // @ts-expect-error TS(2304): Cannot find name 'Tasks'.
              Tasks
            </h3>
            // @ts-expect-error TS(2304): Cannot find name 'ul'.
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-800 m-1">
              // @ts-expect-error TS(2304): Cannot find name 'li'.
              <li className="list-item">Web front-end.</li>
              // @ts-expect-error TS(2304): Cannot find name 'li'.
              <li className="list-item">Backend (Firebase & AWS).</li>
            </ul>
          </li>
          // @ts-expect-error TS(2304): Cannot find name 'div'.
          <div className="border my-2 w-3/4 mx-auto" />
          // @ts-expect-error TS(2304): Cannot find name 'li'.
          <li>
            // @ts-expect-error TS(2304): Cannot find name 'div'.
            <div className="flex justify-around items-center md:justify-start">
              // @ts-expect-error TS(2749): 'Image' refers to a value, but is being used as a ... Remove this comment to see the full error message
              <Image
                // @ts-expect-error TS(2304): Cannot find name 'className'.
                className="h-16 lg:h-20 w-32 lg:w-40"
                // @ts-expect-error TS(2304): Cannot find name 'src'.
                src="/logos/meli.svg"
                // @ts-expect-error TS(2304): Cannot find name 'alt'.
                alt="Mercado Libre"
                // @ts-expect-error TS(2304): Cannot find name 'height'.
                height={80}
                // @ts-expect-error TS(2304): Cannot find name 'width'.
                width={128}
              />
              // @ts-expect-error TS(2304): Cannot find name 'a'.
              <a
                // @ts-expect-error TS(2304): Cannot find name 'className'.
                className="text-base text-gray-900 font-medium m-1 md:ml-12 lg:ml-16"
                // @ts-expect-error TS(2304): Cannot find name 'href'.
                href="https://www.linkedin.com/company/mercadolibre/"
                // @ts-expect-error TS(2304): Cannot find name 'rel'.
                rel="noopener noreferrer"
              >
                // @ts-expect-error TS(2304): Cannot find name 'Mercado'.
                Mercado&nbsp;Libre
              </a>
            </div>
            // @ts-expect-error TS(2304): Cannot find name 'p'.
            <p className="text-base text-gray-700 text-left m-1">
              // @ts-expect-error TS(2304): Cannot find name 'I'.
              I worked in several products. An app for managing the Mercado Pago
              // @ts-expect-error TS(2304): Cannot find name 'Credit'.
              Credit Card, another one that allows users to buy from Mercado
              // @ts-expect-error TS(2304): Cannot find name 'Libre'.
              Libre and pay in installments without a credit card and a personal
              // @ts-expect-error TS(2304): Cannot find name 'loans'.
              loans offer & management one.
            </p>
            // @ts-expect-error TS(2304): Cannot find name 'h3'.
            <h3 className="text-base text-gray-500 text-left m-1 ml-0">
              // @ts-expect-error TS(2304): Cannot find name 'Positions'.
              Positions
            </h3>
            // @ts-expect-error TS(2304): Cannot find name 'ul'.
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-800 italic m-1">
              // @ts-expect-error TS(2304): Cannot find name 'li'.
              <li className="list-item">
                // @ts-expect-error TS(2304): Cannot find name 'SSr'.
                SSr Software Developer | Mar 2020 - Aug 2021
              </li>
              // @ts-expect-error TS(2304): Cannot find name 'li'.
              <li className="list-item">
                // @ts-expect-error TS(2304): Cannot find name 'Jr'.
                Jr Software Developer | Mar 2019 - Mar 2020
              </li>
              // @ts-expect-error TS(2304): Cannot find name 'li'.
              <li className="list-item">IT Assistant | Mar 2018 - Mar 2019</li>
            </ul>
            // @ts-expect-error TS(2304): Cannot find name 'h3'.
            <h3 className="text-base text-gray-500 text-left m-1 ml-0">
              // @ts-expect-error TS(2304): Cannot find name 'Tasks'.
              Tasks
            </h3>
            // @ts-expect-error TS(2304): Cannot find name 'ul'.
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-800 m-1">
              // @ts-expect-error TS(2304): Cannot find name 'li'.
              <li className="list-item">Web & Web mobile front-end.</li>
              // @ts-expect-error TS(2304): Cannot find name 'li'.
              <li className="list-item">Emails development.</li>
              // @ts-expect-error TS(2304): Cannot find name 'li'.
              <li className="list-item">Test automation.</li>
              // @ts-expect-error TS(2304): Cannot find name 'li'.
              <li className="list-item">iOS app.</li>
              // @ts-expect-error TS(2304): Cannot find name 'li'.
              <li className="list-item">Internal dashboard web apps.</li>
            </ul>
          </li>
          // @ts-expect-error TS(2304): Cannot find name 'div'.
          <div className="border my-2 w-3/4 mx-auto" />
          // @ts-expect-error TS(2304): Cannot find name 'li'.
          <li>
            // @ts-expect-error TS(2304): Cannot find name 'div'.
            <div className="flex justify-around items-center md:justify-start">
              // @ts-expect-error TS(2749): 'Image' refers to a value, but is being used as a ... Remove this comment to see the full error message
              <Image
                // @ts-expect-error TS(2304): Cannot find name 'className'.
                className="h-16 lg:h-20 w-32 lg:w-40"
                // @ts-expect-error TS(2304): Cannot find name 'src'.
                src="/logos/intel.svg"
                // @ts-expect-error TS(2304): Cannot find name 'alt'.
                alt="Intel"
                // @ts-expect-error TS(2304): Cannot find name 'height'.
                height={64}
                // @ts-expect-error TS(2304): Cannot find name 'width'.
                width={128}
              />
              // @ts-expect-error TS(2304): Cannot find name 'a'.
              <a
                // @ts-expect-error TS(2304): Cannot find name 'className'.
                className="text-base text-gray-900 font-medium m-1 md:ml-12 lg:ml-16"
                // @ts-expect-error TS(2304): Cannot find name 'href'.
                href="https://www.linkedin.com/company/mcafee/"
                // @ts-expect-error TS(2304): Cannot find name 'rel'.
                rel="noopener noreferrer"
              >
                // @ts-expect-error TS(2304): Cannot find name 'Intel'.
                Intel&nbsp;(now&nbsp;McAfee)
              </a>
            </div>
            // @ts-expect-error TS(2304): Cannot find name 'p'.
            <p className="text-base text-gray-700 text-left m-1 mt-3">
              // @ts-expect-error TS(2304): Cannot find name 'Internship'.
              Internship - Web front-end development & Testing automation
            </p>
            // @ts-expect-error TS(2304): Cannot find name 'h3'.
            <h3 className="text-base text-gray-500 text-left m-1 ml-0">
              // @ts-expect-error TS(2304): Cannot find name 'Positions'.
              Positions
            </h3>
            // @ts-expect-error TS(2304): Cannot find name 'ul'.
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-800 italic m-1">
              // @ts-expect-error TS(2304): Cannot find name 'li'.
              <li className="list-item">
                // @ts-expect-error TS(2304): Cannot find name 'Engineering'.
                Engineering Intern | Mar 2016 - Mar 2017
              </li>
            </ul>
            // @ts-expect-error TS(2304): Cannot find name 'h3'.
            <h3 className="text-base text-gray-500 text-left m-1 ml-0">
              // @ts-expect-error TS(2304): Cannot find name 'Tasks'.
              Tasks
            </h3>
            // @ts-expect-error TS(2304): Cannot find name 'ul'.
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-800 m-1">
              // @ts-expect-error TS(2304): Cannot find name 'li'.
              <li className="list-item">
                // @ts-expect-error TS(2304): Cannot find name 'Web'.
                Web-app for parsing & filtering security report logs.
              </li>
              // @ts-expect-error TS(1101): 'with' statements are not allowed in strict mode.
              <li className="list-item">Tests automation with Selenium.</li>
              // @ts-expect-error TS(2304): Cannot find name 'li'.
              <li className="list-item">
                // @ts-expect-error TS(2304): Cannot find name 'up'.
                Set up a pipeline of tools for user's feedback & bug reporting.
              </li>
            </ul>
          </li>
        </ul>
      </Accordion>
    </section>
  );
}
