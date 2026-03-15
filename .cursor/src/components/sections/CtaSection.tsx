const PARTNER_FRONTENDS = [
  { label: "d8x.trade", href: "https://d8x.trade/" },
  { label: "Freely Perps", href: "https://freelyperps.com/" },
  { label: "Omnistrat", href: "https://omnistrat.trade/" },
  { label: "Decentralized Perps", href: "https://decentralized-perps.com/" },
];

export function CtaSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Launch App
        </h2>
        <p className="text-white/70 mb-8 max-w-xl mx-auto">
          Trade perpetuals on partner frontends. Launch the app or choose a
          frontend to get started.
        </p>
        <a
          href="https://d8x.trade/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded transition-colors mb-8"
        >
          Launch App
        </a>
        <div>
          <p className="text-white/50 text-sm mb-4">Partner Frontends</p>
          <div className="flex flex-wrap justify-center gap-4">
            {PARTNER_FRONTENDS.map((f) => (
              <a
                key={f.href}
                href={f.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-400 text-sm font-medium"
              >
                {f.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
