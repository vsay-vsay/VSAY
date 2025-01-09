"use client";

import AIMLHero from "@/app/components/molecules/HeroSection/aimlHeroSection";
import AIMLApproach from "@/app/components/molecules/ApprochSection/AIMLapproach";
import WhyChooseUsAIML from "@/app/components/molecules/WhyChooseUsSection/WhyChooseUsSectionAIML";

const aiml: React.FC = () => {
  return (
    <>
      <AIMLHero />
      <AIMLApproach />
      <WhyChooseUsAIML />
    </>
  );
};

export default  aiml;
