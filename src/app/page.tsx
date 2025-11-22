'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/sections/hero-section';
import AnimatedMarqueeBanner from '@/components/sections/animated-marquee-banner';
import PortfolioProjects from '@/components/sections/portfolio-projects';
import CompetitiveEdge from '@/components/sections/competitive-edge';
import WorkflowProcess from '@/components/sections/workflow-process';
import ContactCtaSection from '@/components/sections/contact-cta-section';
import CustomCursor from '@/components/ui/custom-cursor';
import MadeByCredit from '@/components/ui/made-by-credit';
import ScanningCornerIndicator from '@/components/ui/scanning-corner-indicator';

const BootSequenceLoader = dynamic(
  () => import('@/components/sections/boot-sequence-loader'),
  { ssr: false }
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <BootSequenceLoader />;
  }

  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden animate-fade-in">
      <CustomCursor />
      <ScanningCornerIndicator />
      <MadeByCredit />

      <HeroSection />
      <AnimatedMarqueeBanner />
      <PortfolioProjects />
      <CompetitiveEdge />
      <WorkflowProcess />
      <ContactCtaSection />
    </main>
  );
}