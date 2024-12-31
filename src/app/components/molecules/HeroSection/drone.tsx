import React, { useState, useEffect } from "react";
import { FaRobot, FaCamera, FaRoute, FaSatellite, FaWifi } from "react-icons/fa";
import { BsArrowDownCircle } from "react-icons/bs";

const DroneHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  const techIcons = [
    { icon: FaRobot, label: "Advanced Flight Control" },
    { icon: FaCamera, label: "4K Camera" },
    { icon: FaRoute, label: "GPS Navigation" },
    { icon: FaSatellite, label: "Satellite Connectivity" },
    { icon: FaWifi, label: "Real-time Transmission" }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          className="object-cover w-full h-full"
          poster="https://images.unsplash.com/photo-1473968512647-3e447244af8f"
        >
          <source
            src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-white">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="mb-4 text-4xl font-bold text-center sm:text-5xl md:text-6xl">
            Revolutionizing Aerial Technology
          </h1>
          <p className="mb-8 text-xl text-center text-gray-200 md:text-2xl">
            Leading the Future of Aerial Technology
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {techIcons.map((tech, index) => (
              <div
                key={index}
                className={`flex flex-col items-center transform transition-all duration-1000 hover:scale-110 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <tech.icon className="w-8 h-8 mb-2 text-blue-400" />
                <span className="text-sm text-center">{tech.label}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 text-lg font-semibold text-white transition-all bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg">
              Explore More
            </button>
            <button className="px-8 py-3 text-lg font-semibold text-blue-600 transition-all bg-white rounded-full hover:bg-gray-100 hover:shadow-lg">
              Watch Demo
            </button>
          </div>
        </div>

        <div
          className="absolute bottom-8 animate-bounce cursor-pointer"
          onClick={scrollToContent}
        >
          <BsArrowDownCircle className="w-10 h-10 text-white hover:text-blue-400 transition-colors duration-300" />
        </div>
      </div>
    </div>
  );
};

export default DroneHeroSection;
