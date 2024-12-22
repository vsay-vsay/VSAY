"use client";
import IoTAboutService from "@/app/components/molecules/AboutSection/IoT";
import IoTProcessSection from "@/app/components/molecules/ApprochSection/IoT";
import IoTHeroSection from "@/app/components/molecules/HeroSection/IoT";
import { RoboticsServiceApplication } from "@/app/components/molecules/RoboticsServicesApplication";

const IoT: React.FC = () => {
  return (
    <>
      <IoTHeroSection />
      <IoTAboutService />
      <RoboticsServiceApplication />
      <IoTProcessSection />
    </>
  );
};

export default IoT;
