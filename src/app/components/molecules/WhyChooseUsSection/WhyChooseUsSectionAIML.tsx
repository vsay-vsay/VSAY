import React from "react";
import { FaRobot, FaBrain, FaChartLine, FaUsers, FaLightbulb, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const WhyChooseUsAIML = () => {
  const benefits = [
    {
      title: "Enhanced Efficiency",
      description: "Automate complex tasks and processes with unprecedented speed and accuracy",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      icon: <FaChartLine className="text-4xl text-blue-500" />
    },
    {
      title: "Data-Driven Insights",
      description: "Extract meaningful patterns and insights from vast amounts of data",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      icon: <FaBrain className="text-4xl text-blue-500" />
    },
    {
      title: "Intelligent Automation",
      description: "Smart systems that learn and adapt to improve performance over time",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b",
      icon: <FaRobot className="text-4xl text-blue-500" />
    }
  ];

  const reasons = [
    {
      icon: <FaLightbulb className="text-4xl text-yellow-500" />,
      title: "Innovative Solutions",
      description: "We leverage cutting-edge AI technologies to solve complex business challenges."
    },
    {
      icon: <FaUsers className="text-4xl text-green-500" />,
      title: "Expert Team",
      description: "Our team consists of world-class AI researchers and engineers with proven expertise."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-purple-500" />,
      title: "Proven Track Record",
      description: "Successfully delivered AI solutions to Fortune 500 companies and startups alike."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us for AI & ML Solutions?</h2>
          <p className="text-xl text-gray-600">Leading the way in artificial intelligence innovation</p>
        </div>

        {/* Why Choose Us Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Our Expertise Section */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Expertise</h3>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <p className="text-gray-600 leading-relaxed">
                  With years of experience in artificial intelligence and machine learning, we bring unparalleled expertise
                  to every project. Our team stays at the forefront of technological advancement, ensuring you receive
                  the most innovative and effective solutions for your business needs.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
                  alt="AI Expertise"
                  className="rounded-lg w-full h-64 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement; // Type assertion for TypeScript
                    target.onerror = null; // Prevent infinite loop if fallback fails
                    target.src = "https://via.placeholder.com/400x300?text=AI+Expertise";
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Our Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement; // Type assertion for TypeScript
                      target.onerror = null; // Prevent infinite loop
                      target.src = "https://via.placeholder.com/400x300?text=Success+Story";
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4">{benefit.icon}</div>
                  <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Ready to Transform Your Business?</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors duration-300"
            >
              Schedule Consultation
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WhyChooseUsAIML;
