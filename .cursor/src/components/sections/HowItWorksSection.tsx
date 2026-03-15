export function HowItWorksSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-12 axion-glitch-wrapper">
          <span className="axion-glitch-text">How It Works</span>
        </h2>
        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Overview / TL;DR
            </h3>
            <ul className="space-y-3 text-white/70 text-base leading-relaxed">
              <li>
                D8X provides fully decentralized perpetuals with financial
                contracts very close to classical centralized perpetuals (e.g.
                BitMEX).
              </li>
              <li>
                Traders can go leveraged short and long; the side with higher
                demand pays a funding rate to the other side. No holding fees.
              </li>
              <li>
                Perpetual price can deviate from the underlying index depending
                on supply and demand, enabling basis trades with other markets.
              </li>
              <li>
                <strong className="text-white">Product types:</strong> Linear,
                inverse, and quanto perpetuals.
              </li>
              <li>
                <strong className="text-white">Collateral:</strong> Perpetuals
                can be collateralized with virtually any ERC-20 token, including
                yield-bearing tokens.
              </li>
              <li>
                <strong className="text-white">Matching:</strong> Limit order
                book combined with an Automated Market Maker; multiple order
                types.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              What is a Perpetual Future?
            </h3>
            <p className="text-white/70 mb-4 leading-relaxed">
              A Perpetual Future is a derivative like a futures contract but with
              no expiry. Traders can hold leveraged long or short positions and
              close at any time. P&L is the price differential between entry and
              exit.
            </p>
            <p className="text-white/70 mb-2 font-medium text-white">
              Funding:
            </p>
            <ul className="space-y-2 text-white/70 text-sm leading-relaxed mb-4">
              <li>
                Funding payments pull the perpetual price toward the spot (index)
                price.
              </li>
              <li>
                If perpetual trades above spot, longs pay shorts; if below spot,
                shorts pay longs.
              </li>
              <li>
                Funding rate is often an 8-hour rate, applied to notional
                position size.
              </li>
            </ul>
            <p className="text-white/70 mb-2 font-medium text-white">Types:</p>
            <ul className="space-y-1 text-white/70 text-sm">
              <li>
                <strong>Quanto:</strong> Collateral in a third currency (e.g.
                ETHUSD collateralized in BTC).
              </li>
              <li>
                <strong>Inverse:</strong> Collateral in base currency (e.g.
                ETHUSD collateralized in ETH).
              </li>
              <li>
                <strong>Linear:</strong> Collateral in quote currency or
                stablecoin (e.g. USDC).
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
