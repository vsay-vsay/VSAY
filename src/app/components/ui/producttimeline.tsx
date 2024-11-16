import Image from "next/image";
import React from "react";
import { Timeline } from "@/app/components/ui/timeline";
import { HoverBorderGradientButton } from "@/app/components/atom/button";
import { iot1, iot2, robotics1, robotics2 } from "@/app/images";
import logo from '@/app/images/vsay-logo.png'


export function ProductDetails() {
  const data = [
    {
        title: "Robotics",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-base font-normal mb-8">
              We specialize in developing cutting-edge robotics solutions that can be used in various industries, such as manufacturing, logistics, and transportation. Our robots are designed with safety, reliability, and ease of use in mind.
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-base font-normal mb-8">
              At our robotics service center, we offer a comprehensive range of solutions to meet all your needs. Our services include high-quality training programs, hands-on workshops, and expert-led sessions that cater to beginners and advanced learners alike. Whether you're looking to learn, design a new product, or refine your robotics skills, we provide dedicated trainers and resources to guide you through every step. We specialize in innovative product design and practical project development, ensuring our clients stay ahead in the evolving world of robotics. With our workshops and professional support, your ideas can seamlessly transform into groundbreaking robotic applications.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src={robotics2}
                alt="startup template"
                width={500}
                height={600}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src={robotics1}
                alt="startup template"
                width={500}
                height={600}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
            <HoverBorderGradientButton text="Explore More !" url="/pages/services/robotics" logo={logo.src} />
          </div>
        ),
      },
      {
        title: "IoT",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-base font-normal mb-8">
              IoT (Internet of Things) is a revolutionary technology that enables smart devices to communicate, share, and interact with each other in a way that was previously impossible. At VSAY, we specialize in developing cutting-edge IoT solutions that can help businesses and organizations improve their efficiency, reduce costs, and enhance customer experiences.
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-base font-normal mb-8">
            We offer a full suite of IoT solutions, from professional training and workshops to product design and prototyping. Our expert trainers ensure participants gain practical, hands-on experience in developing and managing connected devices. Dive into IoT with us and build a future of smart, innovative applications.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src={iot2}
                alt="startup template"
                width={500}
                height={600}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src={iot1}
                alt="startup template"
                width={500}
                height={600}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
            <HoverBorderGradientButton text="Explore More !" url="/pages/services/iot" logo={logo.src} />
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
