import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col justify-center items-center py-20 px-4 text-center">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100">
        404
      </h1>
      <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
        Page not found
      </p>
      <p className="mt-2 text-base text-gray-500 dark:text-gray-500">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-8 px-6 py-3 bg-blue-500 text-white font-medium rounded-sm shadow-sm hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-900 no-underline transition-colors"
      >
        Go home
      </Link>
    </main>
  );
}
