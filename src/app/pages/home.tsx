// src/app/pages/home.tsx

import React from "react";
import { BackgroundLines } from "@/app/components/ui/background-lines";
import {FloatingDockHome} from "@/app/components/atom/dock";
import { HoverBorderGradientButton } from "@/app/components/atom/button";
import { HomePageHeading } from "../constants";
import logo from '@/app/images/vsay-logo.png'

const MainLandingPage: React.FC = () => {
  return (
    <>
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 pt-12">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        {HomePageHeading.heading1} <br /> {HomePageHeading.heading2}
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center pt-10">
        {HomePageHeading.descrition1} <br />
        {HomePageHeading.descrition2}
      </p>
      <HoverBorderGradientButton text="Know More" url="/details" logo={logo} />
      <FloatingDockHome />
    </BackgroundLines>
    </>
  );
};

export default MainLandingPage;
