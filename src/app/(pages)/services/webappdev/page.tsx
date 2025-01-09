"use client";
import WebAppHero from "@/app/components/molecules/HeroSection/WebAppHeroSection";
import ProcessSection from "@/app/components/molecules/ApprochSection/webappapproach";
import WebAppApplications from "@/app/components/molecules/ServiceSection/WebAppApplications"
import WhyChooseUsSection from "@/app/components/molecules/WhyChooseUsSection/WhyChooseUsSection";

const webappapproach: React.FC = () => {
  return (
    <>
     <WebAppHero />
     <ProcessSection />
      <WhyChooseUsSection />
      <WebAppApplications />

      
      
    </>
  );
};

export default webappapproach;
