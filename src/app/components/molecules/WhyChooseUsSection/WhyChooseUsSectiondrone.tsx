import React from "react";
import { motion } from "framer-motion";
import { FiCamera, FiSettings, FiAward, FiHeadphones } from "react-icons/fi";

const WhyChooseSection = () => {
  const benefits = [
    {
      icon: <FiCamera className="w-8 h-8 text-cyan-400" />,
      title: "High-Resolution Imaging",
      description: "Capture stunning aerial photos and videos with advanced drone technology."
    },
    {
      icon: <FiSettings className="w-8 h-8 text-cyan-400" />,
      title: "Customizable Solutions",
      description: "Tailored drone services for inspections, mapping, and surveillance."
    },
    {
      icon: <FiAward className="w-8 h-8 text-cyan-400" />,
      title: "Industry-Leading Performance",
      description: "State-of-the-art drones with unparalleled precision and reliability."
    },
    {
      icon: <FiHeadphones className="w-8 h-8 text-cyan-400" />,
      title: "24/7 Expert Support",
      description: "Professional assistance to ensure seamless drone operations anytime."
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9')] opacity-5 bg-cover bg-center" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-mono font-bold text-white mb-4"
          >
            Why Choose Our Drone Services?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Revolutionizing aerial technology with innovative drone solutions for every industry.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-cyan-400 transition-all duration-300 cursor-pointer"
              role="article"
              aria-label={`Benefit card: ${benefit.title}`}
            >
              <div className="flex items-center space-x-6">
                <div className="p-3 bg-gray-700 rounded-lg">
                  {benefit.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-mono font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute right-0 top-1/4 -z-10 opacity-10"
        >
          <img
            src="https://images.unsplash.com/photo-1519284706417-1d3b6e1471b5"
            alt="Drone in action"
            className="w-64 h-64 object-cover rounded-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseSection;
