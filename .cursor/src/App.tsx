import { useEffect } from 'react';
import { HeaderSection } from '@/components/sections/HeaderSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { PartnerLogosSection } from '@/components/sections/PartnerLogosSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { SecuritySection } from '@/components/sections/SecuritySection';
import { WhiteLabelSection } from '@/components/sections/WhiteLabelSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { FooterSection } from '@/components/sections/FooterSection';

export function App() {
  useEffect(() => {
    document.body.classList.add('app-loaded');
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <HeaderSection />
      <main>
        <HeroSection />
        <PartnerLogosSection />
        <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
          <HowItWorksSection />
          <FeaturesSection />
          <SecuritySection />
          <WhiteLabelSection />
          <FaqSection />
          <PricingSection />
          <CtaSection />
          <FooterSection />
        </div>
      </main>
    </div>
  );
}
