/**
 * Pricing section with single full-width middle card (Level_02).
 * Left (Level_01) and right (Level_03) cards removed.
 */
export function PricingSection() {
  return (
    <section className="relative bg-black py-16 lg:py-24 border-t border-white/10">
      <div className="absolute inset-0 grid-bg opacity-20" aria-hidden />
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-16">
        <div className="w-full">
          <div className="relative bg-black p-6 lg:p-8 w-full">
            <h3 className="text-xl font-semibold text-white mb-2">
              Level_02 Production
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Production-ready deployment with shared liquidity. Full API access,
              dedicated support, and broker fee collection.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="text-white/50">Shared Liquidity</span>
              <span className="text-white/50">Docs & API</span>
              <span className="text-white/50">Broker Fees</span>
              <span className="text-white/50">Production Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
