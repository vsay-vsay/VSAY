"use client";
import React from "react";
import Image from "next/image";
import { HoverBorderGradient } from "@/app/components/ui/hover-border-gradient";

export function HoverBorderGradientButton({ text, url, logo }) {
  return (
    <div className="flex justify-center text-center pt-10">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="a"
        href={url}
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-6 py-2"
      >
        {logo && (
          <Image
            src={logo}
            alt="Logo"
            width={40} // Adjust size as needed
            height={20}
            className="h-5 w-5"
          />
        )}
        <span>{text}</span>
      </HoverBorderGradient>
    </div>
  );
}
