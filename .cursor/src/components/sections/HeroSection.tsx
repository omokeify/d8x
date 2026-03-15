import { useEffect, useRef, useState } from "react";
import { DitheringShader } from "@/components/ui/dithering-shader";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 600, height: 400 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      const { width, height } = entries[0]?.contentRect ?? { width: 600, height: 400 };
      setSize({ width: Math.round(width), height: Math.round(height) });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen pt-16">
        <div className="flex-1 relative flex flex-col items-center justify-center px-6 lg:px-12">
          <div className="max-w-3xl text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white axion-text-glow">
              MEET THE
              <br />
              <span className="text-orange-500">PERPETUAL FUTURES ENGINE</span>
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Institutional-grade decentralized perpetual futures engine on Polygon
              zkEVM. Trade linear, inverse & quanto perps—white-label ready.
            </p>
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="https://d8x.trade/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded transition-colors"
              >
                Launch App
              </a>
              <a
                href="https://d8x.gitbook.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-white/20 hover:border-orange-500 text-white font-medium rounded transition-colors"
              >
                Docs
              </a>
            </div>
          </div>
        </div>
        <div
          ref={containerRef}
          className="flex-1 relative h-[400px] lg:h-full min-h-[400px]"
        >
          <DitheringShader
            width={size.width}
            height={size.height}
            shape="sphere"
            type="random"
            colorBack="#000000"
            colorFront="#f43f5e"
            pxSize={2}
            speed={1.5}
            className="absolute inset-0 w-full h-full"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
