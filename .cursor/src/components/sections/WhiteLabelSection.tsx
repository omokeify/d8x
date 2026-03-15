'use client';

import {
  Layout,
  Code2,
  Webhook,
  FileCode,
  Palette,
  Coins,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { FeatureCard } from '@/components/ui/grid-feature-cards';

const FEATURES = [
  {
    title: 'UI Kit',
    icon: Layout,
    description:
      "Fork, brand and host your own front-end. D8X's ready-to-use UI kit enables an easy custom setup. Start collecting broker fees in no time.",
  },
  {
    title: 'Node SDK',
    icon: Code2,
    description:
      'Integrate D8X perpetuals through the backend of your existing app. Add perpetuals to your offering without building from scratch.',
  },
  {
    title: 'REST API',
    icon: Webhook,
    description:
      'Connect your existing app to D8X through our REST API. White-label partners can integrate perpetuals into their platform programmatically.',
  },
  {
    title: 'Contract Integration',
    icon: FileCode,
    description:
      'Integrate directly on-chain for efficient hedging. Contract-trading enables sophisticated strategies without a custom front-end.',
  },
  {
    title: 'Custom Branding',
    icon: Palette,
    description:
      'Partners can brand their front-ends and set their own trading fees. Your look, your rules—powered by the D8X engine.',
  },
  {
    title: 'Token Integration',
    icon: Coins,
    description:
      'Incorporate your own token in fee structures. Align incentives with your community while offering institutional-grade perpetuals.',
  },
];

type AnimatedContainerProps = {
  delay?: number;
  className?: string;
  children: React.ReactNode;
};

function AnimatedContainer({
  className,
  delay = 0.1,
  children,
}: AnimatedContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function WhiteLabelSection() {
  return (
    <section id="whitelabeling" className="relative bg-black py-16 lg:py-24 border-t border-white/10">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 w-full">
        <AnimatedContainer className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-wide text-balance md:text-4xl lg:text-5xl text-white axion-glitch-wrapper">
            <span className="axion-glitch-text">Partner with D8X</span>
          </h2>
          <p className="text-white/60 mt-4 text-sm tracking-wide text-balance md:text-base">
            Main our content and branding. Everything you need to white-label
            perpetual futures.
          </p>
        </AnimatedContainer>

        <AnimatedContainer
          delay={0.4}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 rounded-lg overflow-hidden"
        >
          {FEATURES.map((feature, i) => (
            <FeatureCard
              key={i}
              feature={feature}
              className="bg-black border-0"
            />
          ))}
        </AnimatedContainer>
      </div>
    </section>
  );
}
