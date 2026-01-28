"use client";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
  return (
    <main className="flex flex-col justify-center items-center py-20 px-4 text-center">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100">
        Oops!
      </h1>
      <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
        Something went wrong
      </p>
      <p className="mt-2 text-base text-gray-500 dark:text-gray-500">
        {error.message || "An unexpected error occurred."}
      </p>
      <button
        onClick={reset}
        className="mt-8 px-6 py-3 bg-blue-500 text-white font-medium rounded-sm shadow-sm hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-900 cursor-pointer transition-colors"
        type="button"
      >
        Try again
      </button>
    </main>
  );
}
