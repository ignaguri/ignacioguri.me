import Image from 'next/image';
// @ts-expect-error TS(6142): Module '../../components/Accordion' was resolved t... Remove this comment to see the full error message
import Accordion from '../../components/Accordion';
import { capitalize } from '../../lib/stringUtils';
import logos from './logos';

export default function Skills() {
  return (
    // @ts-expect-error TS(2552): Cannot find name 'section'. Did you mean 'Selectio... Remove this comment to see the full error message
    <section className="max-w-sm mt-5 md:max-w-lg lg:max-w-4xl">
      // @ts-expect-error TS(2709): Cannot use namespace 'Accordion' as a type.
      <Accordion header="Skills" headerClassName="text-lg" initOpen>
        // @ts-expect-error TS(2304): Cannot find name 'ul'.
        <ul className="flex flex-row flex-wrap justify-around md:min-w-lg lg:min-w-4xl">
          // @ts-expect-error TS(2304): Cannot find name 'li'.
          {logos.map((logo: any) => <li
            // @ts-expect-error TS(2304): Cannot find name 'key'.
            key={logo.filename}
            // @ts-expect-error TS(2304): Cannot find name 'title'.
            title={capitalize(logo: any.filename)}
            // @ts-expect-error TS(2304): Cannot find name 'className'.
            className="m-2 hover:scale-125"
          >
            // @ts-expect-error TS(2749): 'Image' refers to a value, but is being used as a ... Remove this comment to see the full error message
            <Image
              // @ts-expect-error TS(2304): Cannot find name 'className'.
              className="h-10 w-10"
              // @ts-expect-error TS(2304): Cannot find name 'src'.
              src={`/logos/${logo.filename}.svg`}
              // @ts-expect-error TS(2304): Cannot find name 'alt'.
              alt={logo.alt}
              // @ts-expect-error TS(2304): Cannot find name 'width'.
              width={40}
              // @ts-expect-error TS(2304): Cannot find name 'height'.
              height={40}
            />
          </li>)}
        </ul>
      </Accordion>
    </section>
  );
}
