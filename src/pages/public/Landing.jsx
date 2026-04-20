import { useState } from 'react';
import { TopNavigation } from '../../components/layout/TopNavigation';
import { MarketingFooter } from '../../components/layout/Footer';
import { Hero } from '../../components/landing/Hero';
import { Stats } from '../../components/landing/Stats';
import { Services } from '../../components/landing/Services';
import { Steps } from '../../components/landing/Steps';
import { CTA } from '../../components/landing/CTA';

export function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`min-h-screen text-on-surface ${isMenuOpen ? 'mobile-nav-active' : ''}`}>
      <TopNavigation
        activeKey=""
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main>
        <Hero />
        <Stats />
        <Services />
        <Steps />
        <CTA />
      </main>

      <MarketingFooter />
    </div>
  );
}
