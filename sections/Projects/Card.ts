export default function Card({
  project
}: any) {
  return (
    // @ts-expect-error TS(2304): Cannot find name 'div'.
    <div className="max-w-sm p-4 bg-white shadow-lg rounded-xl border border-solid border-gray-200 flex flex-col justify-between">
      // @ts-expect-error TS(2304): Cannot find name 'div'.
      <div>
        // @ts-expect-error TS(2304): Cannot find name 'h2'.
        <h2 className="text-gray-800 font-medium text-base sm:text-lg">
          {project.name}
        </h2>
        // @ts-expect-error TS(2304): Cannot find name 'p'.
        <p className="mt-2 text-sm lg:text-base text-gray-600 italic">
          {project.description}
        </p>
      </div>
      // @ts-expect-error TS(2304): Cannot find name 'div'.
      <div>
        // @ts-expect-error TS(2304): Cannot find name 'div'.
        <div className="border-t-2 my-2" />
        // @ts-expect-error TS(2304): Cannot find name 'p'.
        <p className="text-sm lg:text-base text-gray-600">
          // @ts-expect-error TS(2304): Cannot find name 'span'.
          <span className="underline">Techs</span>: {project.techs.join(' - ')}
        </p>
        // @ts-expect-error TS(2304): Cannot find name 'div'.
        <div className="flex justify-between mt-2 text-sm lg:text-base">
          // @ts-expect-error TS(2304): Cannot find name 'a'.
          <a
            // @ts-expect-error TS(2304): Cannot find name 'href'.
            href={project.repo}
            // @ts-expect-error TS(2304): Cannot find name 'className'.
            className="no-underline"
            // @ts-expect-error TS(2304): Cannot find name 'rel'.
            rel="noopener noreferrer"
          >
            // @ts-expect-error TS(2304): Cannot find name 'Repo'.
            Repo
          </a>
          // @ts-expect-error TS(2304): Cannot find name 'a'.
          <a
            // @ts-expect-error TS(2304): Cannot find name 'href'.
            href={project.link}
            // @ts-expect-error TS(2304): Cannot find name 'className'.
            className="no-underline"
            // @ts-expect-error TS(2304): Cannot find name 'rel'.
            rel="noopener noreferrer"
          >
            // @ts-expect-error TS(2304): Cannot find name 'Link'.
            Link
          </a>
        </div>
      </div>
    </div>
  );
}
