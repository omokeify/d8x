export function SecuritySection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-12 axion-glitch-wrapper">
          <span className="axion-glitch-text">Security & Why D8X</span>
        </h2>
        <div className="space-y-8">
          <ul className="space-y-3 text-white/70 leading-relaxed">
            <li>Institutional-grade perpetual futures DEX on Polygon zkEVM.</li>
            <li>Financial engineering approach; pricing adapts to protect LPs and profitable traders.</li>
            <li>First in DeFi: linear, inverse, and quanto perpetuals; flexible collateral.</li>
            <li>White-label model: institutions can offer decentralized derivatives without building their own engine.</li>
            <li>Supported by Polygon Ventures; $1.5M pre-seed.</li>
            <li><strong className="text-white">Fully decentralized structure; aligned with Swiss financial market regulator FINMA guidance.</strong></li>
          </ul>
          <div className="border-l-2 border-primary/50 pl-6 space-y-4">
            <blockquote className="text-white/80 italic">
              &ldquo;D8X offers decentralized derivatives as a white-label product to DeFi and TradFi entities alike. This opens up a bridge allowing legacy finance to leap into Web3 — all powered by Polygon zkEVM.&rdquo;
              <footer className="text-white/50 text-sm mt-2 not-italic">— Sandeep Nailwal</footer>
            </blockquote>
            <blockquote className="text-white/80 italic">
              &ldquo;With banks entering the industry, the future calls for DeFi products tailored to banks and degens alike — D8X delivers the answer: an incorruptible financial machine that can be white-labeled.&rdquo;
              <footer className="text-white/50 text-sm mt-2 not-italic">— Caspar Sauter</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
