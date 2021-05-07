import Image from 'next/image';
import Accordion from '../../components/Accordion';

export default function Experience() {
  return (
    <section className="max-w-sm mt-5 md:max-w-lg lg:max-w-4xl">
      <Accordion header="Experience" headerClassName="text-lg" initOpen>
        <ul>
          <li>
            <Image
              src="/logos/meli.svg"
              alt="Mercado Libre"
              width={100}
              height={50}
            />
            <p className="text-base text-gray-700 text-left m-1">
              I worked in several products. An app for managing the Mercado Pago
              Credit Card, another one that allows users to buy from Mercado
              Libre and pay in installments without a credit card and a personal
              loans offer & management one.
            </p>
            <h3 className="text-base text-gray-500 text-left m-1 ml-0">
              Positions
            </h3>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-800 italic">
              <li className="list-item">
                SSr Software Developer | Mar 2020 - Present
              </li>
              <li className="list-item">
                Jr Software Developer | Mar 2019 - Mar 2020
              </li>
              <li className="list-item">IT Assistant | Mar 2018 - Mar 2019</li>
            </ul>
            <h3 className="text-base text-gray-500 text-left m-1 ml-0">
              Tasks
            </h3>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-800">
              <li className="list-item">Web & Web mobile front-end.</li>
              <li className="list-item">Emails development.</li>
              <li className="list-item">Test automation.</li>
              <li className="list-item">iOS app.</li>
              <li className="list-item">Internal dashboard web apps.</li>
            </ul>
          </li>
          <li className="mt-2">
            <Image
              src="/logos/mcafee.svg"
              alt="McAfee"
              width={100}
              height={50}
            />
            <p className="text-base text-gray-700 text-left m-1">
              (formerly Intel Security) Internship - Web front-end development &
              Testing automation
            </p>
            <h3 className="text-base text-gray-500 text-left m-1 ml-0">
              Positions
            </h3>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-800 italic">
              <li className="list-item">
                Engineering Intern | Mar 2016 - Mar 2017
              </li>
            </ul>
            <h3 className="text-base text-gray-500 text-left m-1 ml-0">
              Tasks
            </h3>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-800">
              <li className="list-item">
                Web-app for parsing & filtering security report logs.
              </li>
              <li className="list-item">Tests automation with Selenium.</li>
              <li className="list-item">
                Set up a pipeline of tools for user's feedback & bug reporting.
              </li>
            </ul>
          </li>
        </ul>
      </Accordion>
    </section>
  );
}
