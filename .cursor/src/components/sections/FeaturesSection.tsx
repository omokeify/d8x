const FEATURES = [
  { title: 'Trading products', text: 'Linear, inverse, and quanto perpetuals; leveraged long/short; funding rates; no holding fees.' },
  { title: 'Collateral', text: 'Virtually any ERC-20 token, including yield-bearing tokens.' },
  { title: 'Order types', text: 'Limit order book + AMM; multiple order types.' },
  { title: 'Pricing', text: 'Traditional finance derivative pricing theory; AMM adapts to market conditions to protect LPs and profitable traders.' },
  { title: 'White-label', text: 'Front-end kit for partners; custom branding, fees, and token integration.' },
  { title: 'Chain', text: 'Polygon zkEVM.' },
  { title: 'Audience', text: 'DeFi users and institutional players (including TradFi).' },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-12 axion-glitch-wrapper">
          <span className="axion-glitch-text">Features</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="relative axion-group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-white/20 transition-colors"
            >
              <div className="axion-card-line" aria-hidden />
              <div className="axion-corner-bracket axion-cb-tl" aria-hidden />
              <div className="axion-corner-bracket axion-cb-tr" aria-hidden />
              <div className="axion-corner-bracket axion-cb-bl" aria-hidden />
              <div className="axion-corner-bracket axion-cb-br" aria-hidden />
              <h3 className="font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
