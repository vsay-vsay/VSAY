"use client";

import PrintHeroSection from "@/app/components/molecules/HeroSection/Printing";
import IoTProcessSection from "@/app/components/molecules/ApprochSection/Printing";
import PrintingApplications from "@/app/components/molecules/PrintingServicesApplication";
import WhyChooseUsSection from "@/app/components/molecules/WhyChooseUsSectiondrone";
import  PrintingAboutSection  from "@/app/components/molecules/AboutSection/PrintAboutSection";

//import { PrintingApplications } from "@/app/components/molecules/PrintingServicesApplication";

const Printing: React.FC = () => {
  return (
    <>
      <PrintHeroSection />
      <IoTProcessSection />
      <PrintingAboutSection />
      <PrintingApplications />
      <WhyChooseUsSection />
     
      
    </>
  );
};

export default Printing;
