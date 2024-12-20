import Accordion from "@components/Accordion";

export default function Abstract() {
  return (
    <section className="max-w-sm mt-5 md:max-w-lg lg:max-w-4xl">
      <Accordion header="About me" initOpen>
        <h4 className="text-sm text-gray-600 text-left italic mx-1 mt-1 mb-2">
          Currently working as Senior Frontend Engineer @{" "}
          <a
            className="no-underline"
            href="https://www.linkedin.com/company/holidu/"
            rel="noopener noreferrer"
          >
            Holidu GmbH
          </a>
        </h4>
        <p className="text-base text-gray-700 text-left m-1">
          I am a Software Engineer capable of analyzing, designing, developing,
          testing, and debugging high scalability and high performance
          Web/Web-mobile & iOS applications.
        </p>
        <p className="text-base text-gray-700 text-left m-1">
          Working nowadays with TypeScript, mostly with React framework for the
          web, and NodeJS + Firebase/AWS for the backend.
        </p>
        <p className="text-base text-gray-700 text-left m-1">
          I'm always keen to learn and try new techs, frameworks & languages.
        </p>
      </Accordion>
    </section>
  );
}