const TESTIMONIALS = [
  {
    quote:
      'D8X offers decentralized derivatives as a white-label product to DeFi and TradFi entities alike. This opens up a bridge allowing legacy finance to leap into Web3 — all powered by Polygon zkEVM.',
    author: 'Sandeep Nailwal',
    role: 'Co-founder, Polygon',
  },
  {
    quote:
      'With banks entering the industry, the future calls for DeFi products tailored to banks and degens alike — D8X delivers the answer: an incorruptible financial machine that can be white-labeled.',
    author: 'Caspar Sauter',
    role: 'CEO, D8X',
  },
  {
    quote:
      'D8X brings institutional-grade perpetual futures infrastructure to DeFi. The white-label model and financial engineering approach set a new standard for decentralized derivatives.',
    author: 'Polygon Ventures',
    role: 'Investor',
  },
];

export function TestimonialSection() {
  return (
    <section id="testimonials" className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-12 axion-glitch-wrapper">
          <span className="axion-glitch-text">Testimonials</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="relative axion-group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-white/20 transition-colors"
            >
              <div className="axion-card-line" aria-hidden />
              <div className="axion-corner-bracket axion-cb-tl" aria-hidden />
              <div className="axion-corner-bracket axion-cb-tr" aria-hidden />
              <div className="axion-corner-bracket axion-cb-bl" aria-hidden />
              <div className="axion-corner-bracket axion-cb-br" aria-hidden />
              <blockquote className="text-white/80 text-sm leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <footer className="mt-4">
                <cite className="text-white font-medium not-italic">{t.author}</cite>
                <p className="text-white/50 text-xs mt-0.5">{t.role}</p>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
