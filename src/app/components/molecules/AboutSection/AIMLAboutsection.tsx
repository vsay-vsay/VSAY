import React from "react";
import { FaRobot, FaBrain, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutAIML = () => {
  const benefits = [
    {
      title: "Enhanced Efficiency",
      description: "Automate complex tasks and processes with unprecedented speed and accuracy.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      icon: <FaChartLine className="text-4xl text-blue-500" />,
    },
    {
      title: "Data-Driven Insights",
      description: "Extract meaningful patterns and insights from vast amounts of data.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      icon: <FaBrain className="text-4xl text-blue-500" />,
    },
    {
      title: "Intelligent Automation",
      description: "Smart systems that learn and adapt to improve performance over time.",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b",
      icon: <FaRobot className="text-4xl text-blue-500" />,
    },
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About AI & Machine Learning</h2>
          <p className="text-xl text-gray-600">Empowering the future through intelligent solutions.</p>
        </div>

        {/* What is AI/ML Section */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">What is AI/ML?</h3>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <p className="text-gray-600 leading-relaxed">
                  Artificial Intelligence and Machine Learning represent the cutting edge of computational capability,
                  enabling systems to learn from experience, adapt to new inputs, and perform human-like tasks.
                  These technologies form the backbone of modern innovation, driving improvements across industries.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
                  alt="AI Visualization"
                  className="rounded-lg w-full h-64 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement; // Type assertion
                    target.onerror = null; // Prevent infinite loop if fallback fails
                    target.src = "https://via.placeholder.com/400x300?text=AI+Visualization";
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Benefits of AI/ML</h3>
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
                      const target = e.target as HTMLImageElement; // Type assertion
                      target.onerror = null; // Prevent infinite loop
                      target.src = "https://via.placeholder.com/400x300?text=Benefit+Image";
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

        {/* Mission Section */}
        <div className="mb-16">
          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Mission</h3>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-lg text-gray-700">
              "To democratize artificial intelligence and machine learning, making these powerful technologies
              accessible to everyone while ensuring responsible and ethical implementation for the betterment
              of society."
            </blockquote>
          </div>
        </div>

        {/* Get Involved Section */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get Involved</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Start Learning
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors duration-300"
            >
              Join Community
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutAIML;
