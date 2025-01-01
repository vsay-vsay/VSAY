"use client";

import DroneHeroSection from "@/app/components/molecules/HeroSection/drone";
import DroneAboutSection from "@/app/components/molecules/AboutSection/droneAboutSection";
import DroneApproach from "@/app/components/molecules/ApprochSection/droneApproach";
import WhyChooseUsSection from "@/app/components/molecules/WhyChooseUsSection/PrintingSection";


const Drone: React.FC = () => {
  return (
    <>
      <DroneHeroSection />
      <DroneAboutSection />
      
      <DroneApproach />
      <WhyChooseUsSection />
    </>
  );
};

export default Drone;
