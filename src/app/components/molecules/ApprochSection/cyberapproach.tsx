import React from "react";
import { FaShieldAlt, FaLock, FaUserShield, FaSearch } from "react-icons/fa";

const CyberSecurityApproach = () => {
  const approaches = [
    {
      icon: <FaShieldAlt className="text-4xl text-cyan-400" />,
      title: "Proactive Defense",
      description: "Implementation of advanced security measures to prevent cyber threats before they materialize."
    },
    {
      icon: <FaLock className="text-4xl text-cyan-400" />,
      title: "Data Encryption",
      description: "State-of-the-art encryption protocols to secure sensitive information and maintain data integrity."
    },
    {
      icon: <FaUserShield className="text-4xl text-cyan-400" />,
      title: "Access Control",
      description: "Robust authentication systems and user privilege management to prevent unauthorized access."
    },
    {
      icon: <FaSearch className="text-4xl text-cyan-400" />,
      title: "Threat Detection",
      description: "Continuous monitoring and real-time threat detection to identify and neutralize security risks."
    }
  ];

  return (
    <section className="bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b')] bg-cover bg-center bg-fixed py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-black bg-opacity-80 p-8 rounded-xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-cyan-400 mb-4">
            Our Cyber Security Approach
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Protecting Your Digital Assets with Robust Strategies
          </p>
        </div>

        <div className="space-y-12">
          {approaches.map((approach, index) => (
            <div
              key={index}
              className="flex items-center space-x-8 p-6 hover:bg-gray-900 rounded-lg transition-all duration-300 bg-gray-800 bg-opacity-60 backdrop-blur-sm"
            >
              <div className="flex-shrink-0">
                {approach.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                  {approach.title}
                </h3>
                <p className="text-gray-300">
                  {approach.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            className="bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-cyan-700 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
            onClick={() => console.log("Learn More clicked")}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CyberSecurityApproach;