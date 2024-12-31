import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { FiLayers, FiCode, FiCpu, FiGlobe } from "react-icons/fi";

const EnhancedHeroSection = () => {
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
    { icon: FiCode, delay: 0.2 },
    { icon: FiCpu, delay: 0.4 },
    { icon: FiLayers, delay: 0.6 },
    { icon: FiGlobe, delay: 0.8 }
  ];

  const shapes = [
    { color: "bg-purple-500", size: "w-24 h-24", top: "top-20", left: "left-10", rotation: 45 },
    { color: "bg-blue-400", size: "w-32 h-32", top: "top-40", right: "right-20", rotation: -30 },
    { color: "bg-pink-400", size: "w-20 h-20", bottom: "bottom-20", left: "left-1/4", rotation: 15 },
    { color: "bg-indigo-500", size: "w-28 h-28", top: "top-1/3", right: "right-1/3", rotation: 60 }
  ];

  return (
    <motion.div 
      initial={{ backgroundColor: "#1a365d" }}
      animate={{ 
        backgroundColor: ["#1a365d", "#4a1d96", "#831843", "#1a365d"],
        transition: {
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }
      }}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background Shapes with Rotation */}
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0, opacity: 0, rotate: 0 }}
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.2, 0.3, 0.2], 
            rotate: [shape.rotation, shape.rotation + 180, shape.rotation],
            transition: {
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
          transition={{ duration: 1, delay: index * 0.2 }}
          className={`absolute rounded-full blur-xl ${shape.color} ${shape.size} ${shape.top} ${shape.left} ${shape.right} opacity-20`}
        />
      ))}

      {/* Floating Tech Icons */}
      {techIcons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ y: 0 }}
          animate={{ 
            y: [0, -20, 0],
            transition: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: item.delay
            }
          }}
          className={`absolute text-white text-4xl opacity-30 ${index % 2 === 0 ? "left-1/4" : "right-1/4"} top-${(index + 2) * 20}`}
        >
          <item.icon />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="container mx-auto px-6 h-screen flex items-center">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
              Transform Your Digital Experience
            </h1>
            <p className="text-lg md:text-xl tracking-wide leading-relaxed mb-8 text-gray-200">
              Embark on a journey of innovation and creativity. We bring your ideas to life with cutting-edge technology and stunning design.
            </p>
          
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 mb-10 lg:mb-0"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://media.giphy.com/media/vCimx9PwCWjejur1qB/giphy.gif?cid=790b76117v0ifhd0axwdxom64610gwqa772yw1vukrdapfos&ep=v1_gifs_search&rid=giphy.gif&ct=g,"
              alt="Digital Innovation"
              className="rounded-2xl shadow-2xl w-full object-cover"
            />
            

          </motion.div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-75 hover:opacity-100 transition-opacity duration-300"
        aria-label="Scroll Down"
      >
        <FaChevronDown className="text-3xl animate-bounce" />
      </motion.button>
    </motion.div>
  );
};

export default EnhancedHeroSection;