import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiPrinter, FiLayers, FiTool, FiSettings } from "react-icons/fi";

const ApproachSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const approaches = [
    {
      icon: <FiPrinter className="w-8 h-8 text-cyan-500" />,
      title: "3D Model Design",
      description: "Expert 3D modeling and design optimization for perfect prints",
    },
    {
      icon: <FiLayers className="w-8 h-8 text-cyan-500" />,
      title: "Slicing & Preparation",
      description: "Advanced slicing techniques with optimal support structures and infill patterns",
    },
    {
      icon: <FiTool className="w-8 h-8 text-cyan-500" />,
      title: "Print Execution",
      description: "High-precision printing with real-time monitoring and quality control",
    },
    {
      icon: <FiSettings className="w-8 h-8 text-cyan-500" />,
      title: "Post-Processing",
      description: "Professional finishing, including sanding, painting, and assembly services",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    },
  };


  return (
    <section className="py-20 bg-[#0a192f] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 tracking-tight">
            Our 3D Printing Process
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From concept to creation, we utilize state-of-the-art 3D printing technology to bring your ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 transform transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-cyan-400 mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                {approach.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">
                {approach.title}
              </h3>
              <p className="text-gray-400">
                {approach.description}
              </p>
              <button 
                className="mt-6 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg shadow-lg transform transition duration-200 hover:scale-105 hover:shadow-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 group-hover:translate-y-1"
                aria-label={`Learn more about ${approach.title}`}
              >
                Learn More
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ApproachSection;