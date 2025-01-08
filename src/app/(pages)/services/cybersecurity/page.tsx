 "use client";
import CybersecurityHero  from "@/app/components/molecules/HeroSection/cybersecurity";
import CyberSecurityApproach from "@/app/components/molecules/ApprochSection/cyberapproach";
import WhyChooseSectionCyber from "@/app/components/molecules/WhyChooseUsSectioncybersecurity";
import CyberSecurityApp from "@/app/components/molecules/CybersecurityServicesApplication"

const Cybersecurity: React.FC = () => {
  return (
    <>
      
      <CybersecurityHero />
      <CyberSecurityApproach />
      <WhyChooseSectionCyber />
      <CyberSecurityApp />
      
    </>
  );
};

export default Cybersecurity;
