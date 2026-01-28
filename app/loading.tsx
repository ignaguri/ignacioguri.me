export default function Loading() {
  return (
    <div
      className="flex justify-center items-center py-20"
      role="status"
      aria-live="polite"
    >
      <div
        className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"
        aria-hidden="true"
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
