import Accordion from "@components/Accordion";

const CardSkeleton = () => (
  <div className="max-w-sm p-4 bg-white dark:bg-gray-800 shadow-lg rounded-xl border border-solid border-gray-200 dark:border-gray-700 flex flex-col justify-between animate-pulse">
    <div>
      <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
      <div className="mt-3 space-y-2">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
      </div>
    </div>
    <div>
      <div className="border-t-2 border-gray-200 dark:border-gray-700 my-2" />
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3" />
      <div className="flex justify-between mt-2">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-10" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-10" />
      </div>
    </div>
  </div>
);

export default function ProjectsSkeleton() {
  return (
    <section className="max-w-sm mt-5 md:max-w-lg lg:max-w-4xl">
      <Accordion header="Projects" initOpen>
        <h3 className="text-base text-gray-500 dark:text-gray-400 text-left m-1">
          Some side projects I&apos;ve done
        </h3>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 mb-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      </Accordion>
    </section>
  );
}
