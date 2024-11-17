import Image from 'next/image';
import MisionVision from '@/app/images/mission-vision.webp'

export default function MissionVision() {
  return (
    <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0" id='mission'>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="pattern-id"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth="0"
            fill="url(#pattern-id)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
              Our Mission
              </h1>
              <p className="text-base/7 font-semibold text-indigo-600 pt-5">
              Delivering Excellence in products or services for Lasting Impact.
              </p>
              <p className="mt-6 text-xl/8 text-gray-700 dark:text-gray-300">
              To deliver comprehensive technical services and solutions across robotics, IoT, cybersecurity, software development, and beyond, ensuring affordable and high-quality support for all. We aim to empower every vendor with customized software and advanced technical resources to foster growth and innovation across India.
              </p>
            </div>
            <div className="lg:max-w-lg mt-20">
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
              Our Vision
              </h1>
              <p className="text-base/7 font-semibold text-indigo-600 pt-5">
              Leading Innovation in the world for a Brighter Tomorrow.
              </p>
              <p className="mt-6 text-xl/8 text-gray-700 dark:text-gray-300">
              To build a technically empowered nation by providing top-tier training, lab management, and software solutions. Our goal is to enable every organization, small or large, with the tools and expertise needed to thrive in a digital-first world. We envision a future where every enterprise in India leverages cutting-edge technology with seamless, integrated support from VSAY.
              </p>
            </div>
            <div className="lg:max-w-lg mt-20">
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
              About The Company
              </h1>
              <p className="text-base/7 font-semibold text-indigo-600 pt-5">
              Leading Innovation in the world for a Brighter Tomorrow.
              </p>
              <p className="mt-6 text-xl/8 text-gray-700 dark:text-gray-300">
              VSAY is a technology-driven company committed to transforming the way organizations in India access and utilize advanced digital solutions. We specialize in providing high-quality, affordable services across fields like robotics, IoT, cybersecurity, and software development, tailored to support businesses of all sizes. <br />

We believe in building a technically empowered nation, enabling enterprises to leverage innovative tools that foster growth, efficiency, and competitiveness. Through comprehensive training, lab management, and customized solutions, VSAY equips businesses with the knowledge and resources needed to succeed in an increasingly digital world. <br />

At VSAY, we’re dedicated to creating impactful, long-term partnerships by delivering excellence in every project, fostering a future where every organization can thrive with the power of cutting-edge technology.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={MisionVision}
            alt="Project App Screenshot"
            width={912}
            height={608}
          />
        </div>
      </div>
    </div>
  );
}
