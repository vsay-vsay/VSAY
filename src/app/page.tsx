"use client"

import React, { useEffect, useState } from "react";
import { BackgroundLines } from "@/app/components/ui/background-lines";
import {FloatingDockHome} from "@/app/components/atom/dock";
import { HoverBorderGradientButton } from "@/app/components/atom/button";
import { HomePageHeading } from "@/app/constants";
import logo from '@/app/images/vsay-logo.png'
import Modal from "./components/atom/caution";

const MainLandingPage: React.FC = () => {

  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const isMobile = window.innerWidth < 1024;
      const hasSeenModal = sessionStorage.getItem("hasSeenModal");

      // Show modal if on mobile and the user has not seen it in this session
      if (isMobile && !hasSeenModal) {
        setModalVisible(true);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleCloseModal = () => {
    setModalVisible(false);
    sessionStorage.setItem("hasSeenModal", "true");
  };

  return (
    <>
    {isModalVisible && <Modal onClose={handleCloseModal} />}
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 pt-12">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        {HomePageHeading.heading1} <br /> {HomePageHeading.heading2}
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center pt-5">
        {HomePageHeading.descrition1} <br />
        {HomePageHeading.descrition2} 
      </p>
      <h6 className="font-bold pt-4">
        {HomePageHeading.descrition3}
      </h6>
      <HoverBorderGradientButton text="Explore More !" url="/pages/services" logo={logo.src} />
      <FloatingDockHome />
    </BackgroundLines>
    </>
  );
};

export default MainLandingPage;

