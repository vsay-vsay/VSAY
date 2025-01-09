import React from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaBrain, FaCogs, FaDatabase } from "react-icons/fa";

const HeroSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const benefits = [
    {
      icon: <FaChartLine className="text-4xl text-blue-500" />,
      title: "Data-Driven Decisions",
      description: "Transform raw data into actionable insights for informed decision making"
    },
    {
      icon: <FaBrain className="text-4xl text-blue-500" />,
      title: "Pattern Recognition",
      description: "Identify crucial trends and patterns to drive strategic planning"
    },
    {
      icon: <FaCogs className="text-4xl text-blue-500" />,
      title: "Operational Excellence",
      description: "Optimize operations through data-backed efficiency improvements"
    },
    {
      icon: <FaDatabase className="text-4xl text-blue-500" />,
      title: "Data Management",
      description: "Streamline data organization for better business outcomes"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      <div className="relative container mx-auto px-4 py-16 lg:py-24">
        <motion.div 
          initial="initial"
          animate="animate"
          className="text-center mb-16"
        >
          <motion.h1 
            variants={fadeIn}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Unleash the Power of Data Analytics
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Transform your business with cutting-edge data analysis solutions that drive growth and innovation
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Why Data Analysis Matters
          </motion.h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * index }}
                className="flex items-center space-x-6 group hover:bg-white/5 p-4 rounded-lg transition-all duration-300 cursor-pointer"
              >
                <div className="text-blue-500 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-blue-400 transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">
            Get Started Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;