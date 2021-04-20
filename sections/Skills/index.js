import Image from 'next/image';
import Accordion from '../../components/Accordion';

const logos = [
  {
    alt: 'Javascript Logo',
    filename: 'javascript',
  },
  {
    alt: 'HTML5 Logo',
    filename: 'html5',
  },
  {
    alt: 'ReactJS logo',
    filename: 'react',
  },
  {
    alt: 'NodeJS logo',
    filename: 'nodejs',
  },
  {
    alt: 'NextJS logo',
    filename: 'nextjs',
  },
  {
    alt: 'Typescript Logo',
    filename: 'typescript',
  },
  {
    alt: 'VueJS logo',
    filename: 'vue',
  },
  {
    alt: 'Swift Logo',
    filename: 'swift',
  },
];

export default function Skills() {
  return (
    <section className="max-w-sm mt-5 md:max-w-lg lg:max-w-4xl">
      <Accordion header="Skills" headerClassName="text-lg" initOpen>
        <ul>
          {logos.map(logo => (
            <span key={logo.filename} className="mr-2">
              <Image
                src={`/logos/${logo.filename}.svg`}
                alt={logo.alt}
                width={40}
                height={40}
              />
            </span>
          ))}
        </ul>
      </Accordion>
    </section>
  );
}
