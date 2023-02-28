// @ts-expect-error TS(6142): Module '../../components/Accordion' was resolved t... Remove this comment to see the full error message
import Accordion from '../../components/Accordion';

export default function Abstract() {
  return (
    // @ts-expect-error TS(2552): Cannot find name 'section'. Did you mean 'Selectio... Remove this comment to see the full error message
    <section className="max-w-sm mt-5 md:max-w-lg lg:max-w-4xl">
      // @ts-expect-error TS(2709): Cannot use namespace 'Accordion' as a type.
      <Accordion header="About me" headerClassName="text-lg" initOpen>
        // @ts-expect-error TS(2304): Cannot find name 'h4'.
        <h4 className="text-sm text-gray-600 text-left italic mx-1 mt-1 mb-2">
          // @ts-expect-error TS(2304): Cannot find name 'Currently'.
          Currently working as Fullstack TypeScript Developer @{' '}
          // @ts-expect-error TS(2304): Cannot find name 'a'.
          <a
            // @ts-expect-error TS(2304): Cannot find name 'className'.
            className="no-underline"
            // @ts-expect-error TS(2304): Cannot find name 'href'.
            href="https://www.linkedin.com/company/doctari-group/"
            // @ts-expect-error TS(2304): Cannot find name 'rel'.
            rel="noopener noreferrer"
          >
            // @ts-expect-error TS(2304): Cannot find name 'doctari'.
            doctari&nbsp;group
          </a>
        </h4>
        // @ts-expect-error TS(2304): Cannot find name 'p'.
        <p className="text-base text-gray-700 text-left m-1">
          // @ts-expect-error TS(2304): Cannot find name 'I'.
          I am a Software Engineer capable of analyzing, designing, developing,
          // @ts-expect-error TS(2304): Cannot find name 'testing'.
          testing, and debugging high scalability and high performance
          // @ts-expect-error TS(2304): Cannot find name 'Web'.
          Web/Web-mobile & iOS applications.
        </p>
        // @ts-expect-error TS(2304): Cannot find name 'p'.
        <p className="text-base text-gray-700 text-left m-1">
          // @ts-expect-error TS(1101): 'with' statements are not allowed in strict mode.
          Working nowadays with TypeScript, mostly with React framework for the
          // @ts-expect-error TS(2304): Cannot find name 'web'.
          web, and NodeJS + Firebase/AWS for the backend.
        </p>
        // @ts-expect-error TS(2304): Cannot find name 'p'.
        <p className="text-base text-gray-700 text-left m-1">
          // @ts-expect-error TS(2304): Cannot find name 'I'.
          I'm always keen to learn and try new techs, frameworks & languages.
        </p>
      </Accordion>
    </section>
  );
}
