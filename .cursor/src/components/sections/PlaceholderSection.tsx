/**
 * Duplicate of FAQ section structure (relative bg-black, grid-bg overlay).
 * Placeholder for future work.
 */
export function PlaceholderSection() {
  return (
    <section className="relative bg-black py-16 lg:py-24 border-t border-white/10">
      <div className="absolute inset-0 grid-bg opacity-20" aria-hidden />
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 w-full">
        <h2 className="text-2xl font-bold text-white/80 mb-4">
          Section placeholder
        </h2>
        <p className="text-white/50 text-sm">
          Duplicate section structure — ready for customization.
        </p>
      </div>
    </section>
  );
}
