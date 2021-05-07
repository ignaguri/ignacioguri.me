export default function Card({ project }) {
  return (
    <div className="max-w-xs p-4 bg-white shadow-lg rounded-xl border border-solid border-gray-200 flex flex-col justify-between">
      <div>
        <h2 className="text-gray-800 font-medium text-base sm:text-lg">
          {project.name}
        </h2>
        <p className="mt-2 text-sm lg:text-base text-gray-600 italic">
          {project.description}
        </p>
      </div>
      <div>
        <div className="border-t-2 my-2" />
        <p className="text-sm lg:text-base text-gray-600">
          Techs: {project.techs.join(' - ')}
        </p>
        <div className="flex justify-between mt-2 text-sm lg:text-base">
          <a
            href={project.repo}
            className="no-underline"
            rel="noopener noreferrer"
          >
            Repo
          </a>
          <a
            href={project.link}
            className="no-underline"
            rel="noopener noreferrer"
          >
            Link
          </a>
        </div>
      </div>
    </div>
  );
}
