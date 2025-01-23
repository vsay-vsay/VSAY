import Image from "next/image";
import React from "react";
import { Timeline } from "@/app/components/ui/timeline";
import { HoverBorderGradientButton } from "@/app/components/atom/button";
import { iot2, robotics1, robotics2,inventorymanages,programs,codeblock } from "@/app/images";

import logo from "@/app/images/vsay-logo.png";

export function ProductDetails() {
  const data = [
    {
      title: "Inventory Management System",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-base font-normal mb-8">
            Our Inventory Management System helps businesses streamline stock
            management, reduce inefficiencies, and ensure product availability.
            Designed for various industries, our system ensures real-time stock
            tracking and seamless order management.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-base font-normal mb-8">
            Key features include automated stock updates, low-stock alerts,
            detailed reporting, and integration with your existing systems.
            Whether managing a small warehouse or a large supply chain, our
            tools enhance operational efficiency and drive better decision-making.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src= 'https://res.cloudinary.com/daog6scxm/image/upload/v1698412237/cms/inventory-dashboard/Inventory_Dashboard_54_j912wh.webp'
              alt="Inventory Dashboard"
              width={500}
              height={1600}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src= {inventorymanages}
              alt="Inventory Dashboard"
              width={500}
              height={1600}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            
          </div>
          <HoverBorderGradientButton
            text="Explore More!"
            url="https://inventory.vsay.live/"
            logo={logo.src}
          />
        </div>
      ),
    },
    {
      title: "Code Constructor",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-base font-normal mb-8">
            CodeConstructor is a cutting-edge development platform designed to
            streamline software development and deployment processes. It empowers
            developers with intuitive tools and automation to bring ideas to life
            faster and with fewer errors.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-base font-normal mb-8">
            Key features include an advanced code editor, pre-built templates,
            real-time collaboration, and seamless integration with popular
            version control systems. CodeConstructor is built for teams who value
            productivity, scalability, and quality in every project.
          </p>
          <div className="grid grid-cols-2 gap-4">
          <Image
              src={codeblock}
              alt="CodeConstructor Example"
              width={500}
              height={600}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={programs}
              alt="CodeConstructor Example"
              width={500}
              height={600}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <HoverBorderGradientButton
            text="Discover CodeConstructor"
            url="/products/codeconstructor"
            logo={logo.src}
          />
        </div>
      ),
    },
  ];
  
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}



