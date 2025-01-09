import React from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaDatabase, FaBrain, FaChartBar, FaCogs, FaRocket } from "react-icons/fa";

const HeroSection = () => {
  const floatingIcons = [
    { icon: FaChartLine, delay: 0 },
    { icon: FaDatabase, delay: 0.2 },
    { icon: FaBrain, delay: 0.4 },
    { icon: FaChartBar, delay: 0.6 },
    { icon: FaCogs, delay: 0.8 },
    { icon: FaRocket, delay: 1 },
  ];

  const analysisApproaches = [
    {
      icon: FaChartLine,
      title: "Predictive Analytics",
      description: "Forecast future trends and patterns with advanced algorithms",
    },
    {
      icon: FaDatabase,
      title: "Data Mining",
      description: "Extract valuable insights from complex datasets",
    },
    {
      icon: FaBrain,
      title: "Machine Learning",
      description: "Implement intelligent solutions that learn and adapt",
    },
  ];

  return (
    <motion.div 
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-indigo-800/60 to-purple-900/70 z-10" />

      {/* Light Streaks */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%)",
            "linear-gradient(135deg, rgba(255,255,255,0.1) 25%, transparent 25%)",
          ],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          maskImage: "radial-gradient(circle, rgba(0,0,0,0.6) 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,0.6) 20%, transparent 80%)",
        }}
      />

      {/* Particle Effects */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            y: ["0%", "-20%"],
          }}
          transition={{
            duration: Math.random() * 5 + 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={index}
            className="absolute text-white/50 text-6xl"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight],
              rotate: [0, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              delay: item.delay,
            }}
            style={{
              filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))",
            }}
          >
            <Icon />
          </motion.div>
        );
      })}

      <div className="container mx-auto px-4 py-20 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Advanced Analytics Solutions
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transform your data into actionable insights with our cutting-edge analytics platform
          </motion.p>
          <motion.button
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {analysisApproaches.map((approach, index) => {
            const Icon = approach.icon;
            return (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl text-blue-400 mb-4 flex justify-center">
                  <Icon />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{approach.title}</h3>
                <p className="text-gray-300">{approach.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
