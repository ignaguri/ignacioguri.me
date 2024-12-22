import Accordion from "@components/Accordion";
import Image from "next/image";

export default function Experience() {
  return (
    <section className="max-w-sm mt-4 md:max-w-lg lg:max-w-4xl">
      <Accordion header="Experience" initOpen>
        <ul className="mt-2">
          <li>
            <div className="flex justify-around items-center md:justify-start">
              <Image
                className="h-10 w-36"
                src="/logos/holidu.png"
                alt="Holidu"
                height={30}
                width={160}
              />
              <a
                className="text-base text-gray-900 dark:text-gray-100 font-medium m-1 md:ml-8 lg:ml-16 no-underline"
                href="https://www.linkedin.com/company/holidu/"
                rel="noopener noreferrer"
              >
                Holidu GmbH
              </a>
            </div>
            <p className="text-base text-gray-700 dark:text-gray-300 text-left m-1">
              Working on a platform for vacation rentals, helping travelers find
              the perfect accommodation.
            </p>
            <h3 className="text-base text-gray-500 dark:text-gray-400 text-left m-1 ml-0">
              Positions
            </h3>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-800 dark:text-gray-200 italic m-1">
              <li className="list-item">
                Senior Frontend Engineer | Apr 2024 - Present
              </li>
            </ul>
            <h3 className="text-base text-gray-500 dark:text-gray-400 text-left m-1 ml-0">
              Tasks
            </h3>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-800 dark:text-gray-200 m-1">
              <li className="list-item">Web front-end development.</li>
              <li className="list-item">UI/UX improvements.</li>
            </ul>
          </li>
          <div className="border border-gray-300 dark:border-gray-700 my-2 w-3/4 mx-auto" />
          <li>
            <div className="flex justify-around items-center md:justify-start">
              <Image
                className="h-8 w-40"
                src="/logos/doctari_pro.png"
                alt="Doctari"
                height={30}
                width={160}
              />
              <a
                className="text-base text-gray-900 dark:text-gray-100 font-medium m-1 md:ml-8 lg:ml-16 no-underline"
                href="https://www.linkedin.com/company/doctari-group/"
                rel="noopener noreferrer"
              >
                Doctari&nbsp;Group
              </a>
            </div>
            <p className="text-base text-gray-700 dark:text-gray-300 text-left m-1">
              Worked on a platform for hospitals and clinics, to easily hire
              doctors and caregivers all throughout Germany.
            </p>
            <h3 className="text-base text-gray-500 dark:text-gray-400 text-left m-1 ml-0">
              Positions
            </h3>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-800 dark:text-gray-200 italic m-1">
              <li className="list-item">
                Fullstack TypeScript Developer | Sep 2021 - Mar 2024
              </li>
            </ul>
            <h3 className="text-base text-gray-500 dark:text-gray-400 text-left m-1 ml-0">
              Tasks
            </h3>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-800 dark:text-gray-200 m-1">
              <li className="list-item">Web front-end.</li>
              <li className="list-item">Backend (Firebase & AWS).</li>
            </ul>
          </li>
          <div className="border border-gray-300 dark:border-gray-700 my-2 w-3/4 mx-auto" />
          <li>
            <div className="flex justify-around items-center md:justify-start">
              <Image
                className="h-16 lg:h-20 w-32 lg:w-40"
                src="/logos/meli.svg"
                alt="Mercado Libre"
                height={80}
                width={128}
              />
              <a
                className="text-base text-gray-900 dark:text-gray-100 font-medium m-1 md:ml-12 lg:ml-16 no-underline"
                href="https://www.linkedin.com/company/mercadolibre/"
                rel="noopener noreferrer"
              >
                Mercado&nbsp;Libre
              </a>
            </div>
            <p className="text-base text-gray-700 dark:text-gray-300 text-left m-1">
              I worked in several products. An app for managing the Mercado Pago
              Credit Card, another one that allows users to buy from Mercado
              Libre and pay in installments without a credit card and a personal
              loans offer & management one.
            </p>
            <h3 className="text-base text-gray-500 dark:text-gray-400 text-left m-1 ml-0">
              Positions
            </h3>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-800 dark:text-gray-200 italic m-1">
              <li className="list-item">
                SSr Software Developer | Mar 2020 - Aug 2021
              </li>
              <li className="list-item">
                Jr Software Developer | Mar 2019 - Mar 2020
              </li>
              <li className="list-item">IT Assistant | Mar 2018 - Mar 2019</li>
            </ul>
            <h3 className="text-base text-gray-500 dark:text-gray-400 text-left m-1 ml-0">
              Tasks
            </h3>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-800 dark:text-gray-200 m-1">
              <li className="list-item">Web & Web mobile front-end.</li>
              <li className="list-item">Emails development.</li>
              <li className="list-item">Test automation.</li>
              <li className="list-item">iOS app.</li>
              <li className="list-item">Internal dashboard web apps.</li>
            </ul>
          </li>
          <div className="border border-gray-300 dark:border-gray-700 my-2 w-3/4 mx-auto" />
          <li>
            <div className="flex justify-around items-center md:justify-start">
              <Image
                className="h-16 lg:h-20 w-32 lg:w-40"
                src="/logos/intel.svg"
                alt="Intel"
                height={64}
                width={128}
              />
              <a
                className="text-base text-gray-900 dark:text-gray-100 font-medium m-1 md:ml-12 lg:ml-16 no-underline"
                href="https://www.linkedin.com/company/mcafee/"
                rel="noopener noreferrer"
              >
                Intel&nbsp;(now&nbsp;McAfee)
              </a>
            </div>
            <p className="text-base text-gray-700 dark:text-gray-300 text-left m-1 mt-3">
              Internship - Web front-end development & Testing automation
            </p>
            <h3 className="text-base text-gray-500 dark:text-gray-400 text-left m-1 ml-0">
              Positions
            </h3>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-800 dark:text-gray-200 italic m-1">
              <li className="list-item">
                Engineering Intern | Mar 2016 - Mar 2017
              </li>
            </ul>
            <h3 className="text-base text-gray-500 dark:text-gray-400 text-left m-1 ml-0">
              Tasks
            </h3>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-800 dark:text-gray-200 m-1">
              <li className="list-item">
                Web-app for parsing & filtering security report logs.
              </li>
              <li className="list-item">Tests automation with Selenium.</li>
              <li className="list-item">
                Set up a pipeline of tools for user&apos;s feedback & bug
                reporting.
              </li>
            </ul>
          </li>
        </ul>
      </Accordion>
    </section>
  );
}
