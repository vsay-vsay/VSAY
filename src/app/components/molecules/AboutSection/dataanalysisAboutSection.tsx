import React, { useState, useEffect } from "react";
import { BsArrowRight, BsCheckCircle, BsGraphUp, BsLightbulb } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { FaChartLine, FaDatabase, FaCogs, FaUsersCog } from "react-icons/fa";

const AboutDataAnalysis = () => {
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <FaChartLine className="text-4xl" />,
      title: "Advanced Analytics",
      description: "Powerful insights through cutting-edge analytical tools and methodologies",
    },
    {
      icon: <FaDatabase className="text-4xl" />,
      title: "Data Management",
      description: "Efficient handling of large-scale data with secure storage solutions",
    },
    {
      icon: <FaCogs className="text-4xl" />,
      title: "Process Automation",
      description: "Streamline operations with intelligent automation capabilities",
    },
    {
      icon: <FaUsersCog className="text-4xl" />,
      title: "Expert Consultation",
      description: "Professional guidance from experienced data analysts",
    },
  ];

  const whyChooseUs = [
    {
      icon: <BsGraphUp className="text-3xl" />,
      title: "Proven Results",
      description: "Track record of delivering exceptional analytical solutions",
    },
    {
      icon: <BsCheckCircle className="text-3xl" />,
      title: "Quality Assurance",
      description: "Rigorous testing and validation processes",
    },
    {
      icon: <BsLightbulb className="text-3xl" />,
      title: "Innovation Focus",
      description: "Cutting-edge technologies and methodologies",
    },
  ];

  return (
    <div className="font-poppins">
      {/* Hero Section */}
      <div
        className="relative min-h-[600px] flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
        <div
          className={`relative text-center p-8 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Data Analysis Excellence</h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Transform your business insights with our cutting-edge data analysis solutions
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition-all duration-300 flex items-center mx-auto"
          >
            Discover More! <BsArrowRight className="ml-2" />
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">Our Features</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white bg-opacity-10 rounded-lg hover:scale-105 transition-all duration-300"
            >
              <div className="bg-blue-600 text-white p-4 rounded-full w-fit mb-6 hover:rotate-6 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 px-4 bg-white">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">Why Choose Us</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg hover:bg-blue-50 transition-all duration-300"
            >
              <div className="text-blue-600 mb-6 hover:animate-bounce">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-900">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 bg-black/70 transition-opacity"></div>
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="relative bg-white rounded-lg max-w-lg w-full p-8 transform transition-all">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <IoClose size={24} />
              </button>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Get Started with Data Analysis</h3>
              <p className="text-gray-600 mb-6">
                Let's transform your data into actionable insights. Our team of experts is ready to help you achieve your business goals through advanced analytics.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300"
              >
                Contact Us Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutDataAnalysis;