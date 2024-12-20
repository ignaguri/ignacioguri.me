import Accordion from "@components/Accordion";
import { fetchGitHubProjects } from "@lib/github";
import { Project } from "@lib/types";

const Card = ({ name, description, techs, repo, link }: Project) => {
  return (
    <div className="max-w-sm p-4 bg-white shadow-lg rounded-xl border border-solid border-gray-200 flex flex-col justify-between">
      <div>
        <h2 className="text-gray-800 font-medium text-base sm:text-lg">
          {name}
        </h2>
        <p className="mt-2 text-sm lg:text-base text-gray-600 italic">
          {description}
        </p>
      </div>
      <div>
        <div className="border-t-2 my-2" />
        <p className="text-sm lg:text-base text-gray-600">
          <span className="underline">Techs</span>: {techs.join(" - ")}
        </p>
        <div className="flex justify-between mt-2 text-sm lg:text-base">
          <a href={repo} className="no-underline" rel="noopener noreferrer">
            Repo
          </a>
          {link && (
            <a href={link} className="no-underline" rel="noopener noreferrer">
              Link
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default async function Projects() {
  let projects: Project[] = [];
  let error: string | null = null;

  try {
    projects = await fetchGitHubProjects("ignaguri");
  } catch (err) {
    error = err instanceof Error ? err.message : "An unknown error occurred";
  }

  if (error) {
    return (
      <section className="max-w-sm mt-5 md:max-w-lg lg:max-w-4xl">
        <div>Error: {error}</div>
      </section>
    );
  }

  return (
    <section className="max-w-sm mt-5 md:max-w-lg lg:max-w-4xl">
      <Accordion header="Projects" initOpen>
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
