"use client";
import RoboticsAboutService from "@/app/components/molecules/RoboticsAboutSection";
import RoboticsApproachSection from "@/app/components/molecules/RoboticsApproch";
import RoboticsHeroSection from "@/app/components/molecules/RoboticsHeroSection";
import { RoboticsServiceApplication } from "@/app/components/molecules/RoboticsServicesApplication";
import WhyChooseUsSection from "@/app/components/molecules/WhyChooseUsSection";

const Robotics: React.FC = () => {
  return (
    <>
      <RoboticsHeroSection />
      <RoboticsAboutService />
      <WhyChooseUsSection />
      <RoboticsServiceApplication />
      <RoboticsApproachSection />
    </>
  );
};

export default Robotics;
