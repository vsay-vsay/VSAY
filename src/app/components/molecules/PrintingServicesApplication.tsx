import React, { useState } from "react";
import { FaIndustry, FaMedkit, FaCar, FaHome, FaGraduationCap, FaSpaceShuttle } from "react-icons/fa";

const ThreeDPrintingApplications = () => {
  const [selectedApp, setSelectedApp] = useState(0);

  const applications = [
    {
      id: 1,
      title: "Industrial Manufacturing",
      description: "Rapid prototyping and custom parts production for industrial applications",
      icon: <FaIndustry className="text-4xl text-indigo-600" />,
      image: "https://images.unsplash.com/photo-1615947171279-0c9be5aa5d73"
    },
    {
      id: 2,
      title: "Medical Applications",
      description: "Custom prosthetics, medical models, and surgical planning tools",
      icon: <FaMedkit className="text-4xl text-pink-600" />,
      image: "https://images.unsplash.com/photo-1584036533827-45bce166ad94"
    },
    {
      id: 3,
      title: "Automotive",
      description: "Prototyping and manufacturing of automotive parts and components",
      icon: <FaCar className="text-4xl text-blue-600" />,
      image: "https://images.unsplash.com/photo-1547038577-da80abbc4f19"
    },
    {
      id: 4,
      title: "Architecture",
      description: "Scale models and architectural components for building design",
      icon: <FaHome className="text-4xl text-green-600" />,
      image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae"
    },
    {
      id: 5,
      title: "Education",
      description: "Learning aids and educational models for enhanced understanding",
      icon: <FaGraduationCap className="text-4xl text-yellow-600" />,
      image: "https://images.unsplash.com/photo-1509869175650-a1d97972541a"
    },
    {
      id: 6,
      title: "Aerospace",
      description: "Lightweight components and prototypes for aerospace applications",
      icon: <FaSpaceShuttle className="text-4xl text-purple-600" />,
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            3D Printing Applications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the revolutionary applications of 3D printing technology across various industries and sectors.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row h-auto lg:h-[600px] rounded-xl overflow-hidden shadow-2xl">
          {/* Left Section */}
          <div className="lg:w-1/3 bg-gray-50 p-6 overflow-y-auto max-h-[600px]">
            {applications.map((app, index) => (
              <div
                key={app.id}
                className={`cursor-pointer p-4 rounded-lg mb-4 ${
                  selectedApp === index ? "bg-blue-100 shadow-md" : "hover:bg-gray-100"
                }`}
                onClick={() => setSelectedApp(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    {app.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{app.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className="lg:w-2/3 relative">
            <div
              className="w-full h-64 lg:h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${applications[selectedApp].image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40">
                <div className="h-full flex flex-col justify-end p-8 text-white">
                  <div className="bg-black bg-opacity-50 p-6 rounded-xl">
                    <div className="mb-4">{applications[selectedApp].icon}</div>
                    <h3 className="text-2xl font-bold mb-3">{applications[selectedApp].title}</h3>
                    <p className="text-lg">{applications[selectedApp].description}</p>
                    <button className="mt-6 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100">
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

export default ThreeDPrintingApplications;
