import Image from 'next/image';
import Accordion from '../../components/Accordion';
import { capitalize } from '../../lib/stringUtils';
import logos from './logos';

export default function Skills() {
  return (
    <section className="max-w-sm mt-5 md:max-w-lg lg:max-w-4xl">
      <Accordion header="Skills" headerClassName="text-lg" initOpen>
        <ul className="flex flex-row flex-wrap justify-around md:min-w-lg lg:min-w-4xl">
          {logos.map(logo => (
            <li
              key={logo.filename}
              title={capitalize(logo.filename)}
              className="m-2 hover:scale-125"
            >
              <Image
                className="h-10 w-10"
                src={`/logos/${logo.filename}.svg`}
                alt={logo.alt}
                width={40}
                height={40}
              />
            </li>
          ))}
        </ul>
      </Accordion>
    </section>
  );
}
