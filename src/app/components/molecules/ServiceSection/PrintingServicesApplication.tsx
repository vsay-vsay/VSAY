import { printingpage1, printingpage2, printingpage3, printingpage4, printingpage5, printingpage6 } from "@/app/images";
import React, { useState } from "react";
import { FaIndustry, FaMedkit, FaCar, FaHome, FaGraduationCap, FaSpaceShuttle } from "react-icons/fa";
import Image from "next/image";

const PrintingApplications = () => {
  const [selectedApp, setSelectedApp] = useState(0);

  const applications = [
    {
      id: 1,
      title: "Industrial Manufacturing",
      description: "Rapid prototyping and custom parts production for industrial applications",
      icon: <FaIndustry className="text-4xl text-indigo-600" />,
      image: printingpage1,
    },
    {
      id: 2,
      title: "Medical Applications",
      description: "Custom prosthetics, medical models, and surgical planning tools",
      icon: <FaMedkit className="text-4xl text-pink-600" />,
      image: printingpage2,
    },
    {
      id: 3,
      title: "Automotive",
      description: "Prototyping and manufacturing of automotive parts and components",
      icon: <FaCar className="text-4xl text-blue-600" />,
      image: printingpage3
    },
    {
      id: 4,
      title: "Architecture",
      description: "Scale models and architectural components for building design",
      icon: <FaHome className="text-4xl text-green-600" />,
      image: printingpage4
    },
    {
      id: 5,
      title: "Education",
      description: "Learning aids and educational models for enhanced understanding",
      icon: <FaGraduationCap className="text-4xl text-yellow-600" />,
      image: printingpage5
    },
    {
      id: 6,
      title: "Aerospace",
      description: "Lightweight components and prototypes for aerospace applications",
      icon: <FaSpaceShuttle className="text-4xl text-purple-600" />,
      image: printingpage6
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            3D Printing Applications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the revolutionary applications of 3D printing technology across various industries and sectors.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row h-auto lg:h-[700px] rounded-xl overflow-hidden shadow-2xl">
          {/* Left Section */}
          <div className="lg:w-1/3 bg-gray-50 dark:bg-gray-800 dark:shadow-md p-6 overflow-y-auto max-h-[700px]">
            {applications.map((app, index) => (
              <div
                key={app.id}
                className={`cursor-pointer p-4 rounded-lg mb-4 ${
                  selectedApp === index ? "bg-gray-500 shadow-md" : "hover:bg-gray-700"
                }`}
                onClick={() => setSelectedApp(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    {app.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">{app.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* {/* Right Section */}
          <div className="lg:w-2/3 relative">
            {/* Using Next.js Image Component */}
            <div className="w-full h-64 lg:h-full relative">
              <Image
                src={applications[selectedApp].image}
                alt={applications[selectedApp].title}
                layout="fill" // Makes the image fill the container
                objectFit="cover" // Ensures the image covers the area without distortion
                className="rounded-xl" // Optional styling for rounded corners
                priority // Optional: prioritize image loading
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40">
                <div className="h-full flex flex-col justify-end p-8 text-white">
                  <div className="bg-black bg-opacity-50 p-6 rounded-xl">
                    <div className="mb-4">{applications[selectedApp].icon}</div>
                    <h3 className="text-2xl font-bold mb-3">{applications[selectedApp].title}</h3>
                    <p className="text-lg">{applications[selectedApp].description}</p>
                    <button className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintingApplications;
