// @ts-expect-error TS(6142): Module '../../components/Accordion' was resolved t... Remove this comment to see the full error message
import Accordion from '../../components/Accordion';
import projects from './projects';
import Card from './Card';

export default function Projects() {
  return (
    // @ts-expect-error TS(2552): Cannot find name 'section'. Did you mean 'Selectio... Remove this comment to see the full error message
    <section className="max-w-sm mt-5 md:max-w-lg lg:max-w-4xl">
      // @ts-expect-error TS(2709): Cannot use namespace 'Accordion' as a type.
      <Accordion header="Projects" headerClassName="text-lg" initOpen>
        // @ts-expect-error TS(2304): Cannot find name 'h3'.
        <h3 className="text-base text-gray-500 text-left m-1">
          // @ts-expect-error TS(2304): Cannot find name 'Some'.
          Some side projects I've done
        </h3>
        // @ts-expect-error TS(2304): Cannot find name 'div'.
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 mb-4">
          // @ts-expect-error TS(2749): 'Card' refers to a value, but is being used as a t... Remove this comment to see the full error message
          {projects.map((project: any) => <Card key={project.name} project={project} />)}
        </div>
      </Accordion>
    </section>
  );
}
