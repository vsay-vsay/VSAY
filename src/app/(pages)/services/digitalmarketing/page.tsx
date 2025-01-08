"use client";
import RoboticsAboutService from "@/app/components/molecules/AboutSection/RoboticsAboutSection";
import DigitalApproachSection from "@/app/components/molecules/ApprochSection/digitlmarketapproach";
import DigitalHeroSection from "@/app/components/molecules/HeroSection/digitalmarket";
import DigitalMarketingApplications from "@/app/components/molecules/DigitalMarketingApplication";
import WhyChooseUsSection from "@/app/components/molecules/WhyChooseUsSection";

const DigitalMarketing: React.FC = () => {
  return (
    <>
      <DigitalHeroSection />
      <DigitalApproachSection />
      <DigitalMarketingApplications/>
      
    </>
  );
};

export default DigitalMarketing;
