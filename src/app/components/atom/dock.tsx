import React from "react";
import { FloatingDock } from "@/app/components/ui/floating-dock";
import {
  IconAddressBook,
  IconUserBolt,
  IconHome,
  IconSettingsStar,
} from "@tabler/icons-react";
import Image from "next/image";
import VsayLogo from "@/app/images/vsay-logo.png"

export function FloatingDockHome() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Services",
      icon: (
        <IconSettingsStar className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/services",
    },
    {
      title: "VSAY Home",
      icon: (
        <Image
          src={VsayLogo}
          width={60}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      href: "/",
    },

    {
      title: "About Us",
      icon: (
        <IconUserBolt className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/aboutus",
    },
    {
      title: "Contact Us",
      icon: (
        <IconAddressBook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/contact",
    },
  ];
  return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
