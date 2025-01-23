"use client";

import HeroSection from "@/app/components/molecules/HeroSection/HeroCodeConstructor";
import ApproachSection from "@/app/components/molecules/ServiceSection/CodeConstructorApproachService";
import WhyChooseCodeConstSection from "@/app/components/molecules/WhyChooseUsSection/CodeConstructorWhyChooseUs";


const codeconstructor: React.FC = () => {
  return (
      <>
          <HeroSection />
          <ApproachSection />
          <WhyChooseCodeConstSection />
      </>
  );
};

export default codeconstructor;


