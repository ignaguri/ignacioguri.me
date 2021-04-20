import Accordion from '../../components/Accordion';

export default function Abstract() {
  return (
    <section className="max-w-sm mt-5 md:max-w-lg lg:max-w-4xl">
      <Accordion header="About me" headerClassName="text-lg" initOpen>
        <h4 className="text-sm text-gray-600 text-left italic mx-1 mb-2">
          Currently working as SSr Software Developer @{' '}
          <a
            className="no-underline"
            href="https://www.linkedin.com/company/mercadolibre/"
            rel="noopener noreferrer"
          >
            Mercado&nbsp;Libre
          </a>
        </h4>
        <p className="text-base text-gray-700 text-left m-1">
          I work as a Software Engineer in charge of analyzing, designing,
          developing, testing, and debugging high scalability and high
          performance Web/Web-mobile & iOS applications.
        </p>
        <p className="text-base text-gray-700 text-left m-1">
          Working nowadays with HTML & Javascript + NodeJS, mostly with React
          framework for the web, and Swift language for iOS apps.
        </p>
        <p className="text-base text-gray-700 text-left m-1">
          I'm always keen to learn and try new techs, frameworks & languages.
        </p>
      </Accordion>
    </section>
  );
}
