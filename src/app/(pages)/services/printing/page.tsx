"use client";

import PrintHeroSection from "@/app/components/molecules/HeroSection/Printing";
import PrintingApplications from "@/app/components/molecules/ServiceSection/PrintingServicesApplication";
import WhyChooseUsSection from "@/app/components/molecules/WhyChooseUsSection/PrintingSection";
import  PrintingAboutSection  from "@/app/components/molecules/AboutSection/PrintAboutSection";
import PrintingApproach from "@/app/components/molecules/ApprochSection/Printing";
import Section from "@/app/components/ui/Section";

//import { PrintingApplications } from "@/app/components/molecules/PrintingServicesApplication";

const Printing: React.FC = () => {
  return (
    <>
      <PrintHeroSection />
      <PrintingAboutSection />
      <Section crosses className="!px-0 !py-0">
      <PrintingApplications />
      </Section>
      <PrintingApproach />
      <Section crosses className="!px-0 !py-0">
      <WhyChooseUsSection />
      </Section>
    </>
  );
};

export default Printing;
