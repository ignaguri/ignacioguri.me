import Accordion from "../../components/Accordion";
import projects from "./projects";
import Card from "./Card";
import { Project } from "./projects";

export default function Projects() {
  return (
    <section className="max-w-sm mt-5 md:max-w-lg lg:max-w-4xl">
      <Accordion header="Projects" headerClassName="text-lg" initOpen>
        <h3 className="text-base text-gray-500 text-left m-1">
          Some side projects I've done
        </h3>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 mb-4">
          {projects.map((project: Project) => (
            <Card key={project.name} {...project} />
          ))}
        </div>
      </Accordion>
    </section>
  );
}
