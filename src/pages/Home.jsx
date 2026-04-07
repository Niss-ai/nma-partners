import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import RecentFundings from '../components/RecentFundings';
import TrustBar from '../components/TrustBar';
import FundingOptions from '../components/FundingOptions';
import StatsSection from '../components/StatsSection';
import WhyChooseUs from '../components/WhyChooseUs';
import HowItWorks from '../components/HowItWorks';
import UseCases from '../components/UseCases';
import FundingCalculator from '../components/FundingCalculator';
import CTASection from '../components/CTASection';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <RecentFundings />
      <TrustBar />
      <FundingOptions />
      <StatsSection />
      <WhyChooseUs />
      <HowItWorks />
      <UseCases />
      <FundingCalculator />
      <Testimonials />
      <FAQ />
      <CTASection />
    </div>
  );
}