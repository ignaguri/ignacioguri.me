export default function Loading() {
  return (
    <div className="flex justify-center items-center py-20" role="status" aria-live="polite">
      {/* impeccable-disable-next-line border-accent-on-rounded -- two-sided border is the spin technique, not a card accent */}
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-strong" aria-hidden="true" />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
