import React from "react";
import { FaShieldAlt, FaLock, FaNetworkWired } from "react-icons/fa";

const CybersecurityHero = () => {
  const features = [
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      text: "Advanced Threat Protection"
    },
    {
      icon: <FaLock className="w-8 h-8" />,
      text: "Secure Encryption"
    },
    {
      icon: <FaNetworkWired className="w-8 h-8" />,
      text: "Network Monitoring"
    }
  ];

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
          alt="Cybersecurity Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-blue-900/80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Elevate Your Cybersecurity Posture
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Stay one step ahead of cyber threats with our comprehensive solutions
            that protect your digital assets 24/7.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="text-blue-400">{feature.icon}</div>
                  <p className="text-white font-semibold">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
    </div>
  );
};

export default CybersecurityHero;