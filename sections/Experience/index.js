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
              <li>SSr Software Developer | Mar 2020 - Present </li>
              <li>Jr Software Developer | Mar 2019 - Mar 2020</li>
              <li>IT Assistant | Mar 2018 - Mar 2019</li>
            </ul>
            <h3 className="text-base text-gray-500 text-left m-1 ml-0">
              Tasks
            </h3>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-800">
              <li>Web & Web mobile front-end.</li>
              <li>Emails development.</li>
              <li>Test automation.</li>
              <li>iOS app.</li>
              <li>Internal dashboard web apps.</li>
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
              (former Intel Security) Internship - Web front-end development &
              Testing automation
            </p>
            <h3 className="text-base text-gray-500 text-left m-1 ml-0">
              Positions
            </h3>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-800 italic">
              <li>Engineering Intern | Mar 2016 - Mar 2017</li>
            </ul>
            <h3 className="text-base text-gray-500 text-left m-1 ml-0">
              Tasks
            </h3>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-800">
              <li>Web-app for parsing & filtering security report logs.</li>
              <li>Tests automation with Selenium.</li>
              <li>
                Set up a pipeline of tools for user's feedback & bug reporting.
              </li>
            </ul>
          </li>
        </ul>
      </Accordion>
    </section>
  );
}
