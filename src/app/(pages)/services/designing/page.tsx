"use client";

import HeroSection from "@/app/components/molecules/HeroSection/designing";
import DesignApproachSection from "@/app/components/molecules/ApprochSection/designapproach";
import DesignAboutSection from "@/app/components/molecules/AboutSection/designAboutSection"
import DesignServices from "@/app/components/molecules/ServiceSection/designServicesApplication";
const DesigningPage = () => {
  return (
    <>
      <HeroSection />
      <DesignApproachSection />
      <DesignAboutSection />
      <DesignServices />

    </>
  );
};

export default DesigningPage;
