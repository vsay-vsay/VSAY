"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";
import { cyberSecurity1 } from "@/app/images";

export function HeroParallaxs() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: cyberSecurity1.src,
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: cyberSecurity1.src,
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: cyberSecurity1.src,
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: cyberSecurity1.src,
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: cyberSecurity1.src,
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: cyberSecurity1.src,
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: cyberSecurity1.src,
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: cyberSecurity1.src,
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: cyberSecurity1.src,
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: cyberSecurity1.src,
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: cyberSecurity1.src,
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: cyberSecurity1.src,
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: cyberSecurity1.src,
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: cyberSecurity1.src,
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: cyberSecurity1.src,
  },
];
