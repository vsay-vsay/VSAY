"use client";
import WebAppHero from "@/app/components/molecules/HeroSection/WebAppHeroSection";
import ProcessSection from "@/app/components/molecules/ApprochSection/webappapproach";
import WebAppApplications from "@/app/components/molecules/WebAppApplications"
import WhyChooseUsSection from "@/app/components/molecules/WhyChooseUsSection";

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
