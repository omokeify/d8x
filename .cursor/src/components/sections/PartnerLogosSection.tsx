const PARTNERS = [
  { name: "Pyth", src: "/images/partners/pyth.svg" },
  { name: "Swissborg", src: "/images/partners/swissborg.svg" },
  { name: "Axelar", src: "/images/partners/axelar.svg" },
  { name: "Polygon Ventures", src: "/images/partners/polygon-ventures.svg" },
];

export function PartnerLogosSection() {
  return (
    <section className="py-8 lg:py-12 border-y border-white/10">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <p className="text-white/50 text-xs mb-6 tracking-widest uppercase">
          Backed by
        </p>
        <div className="flex flex-wrap items-center gap-6 lg:gap-8">
          {PARTNERS.map((p) => (
            <div
              key={p.name}
              className="flex items-center justify-center h-6 w-[100px]"
            >
              <img
                src={p.src}
                alt={p.name}
                className="h-6 w-auto max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
