import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IconArrowDown, IconArrowRight } from '@tabler/icons-react';

const IoTHeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden" 
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/80 to-indigo-900/80"></div>

      {/* Animated IoT Background Elements */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute w-32 h-32 bg-blue-500 rounded-full blur-3xl top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute w-40 h-40 bg-purple-500 rounded-full blur-3xl top-1/2 right-1/3 animate-pulse delay-700"></div>
        <div className="absolute w-36 h-36 bg-indigo-500 rounded-full blur-3xl bottom-1/4 right-1/4 animate-pulse delay-500"></div>
      </motion.div>

      {/* Network Lines Animation */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent top-1/3 animate-slide"></div>
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent top-2/3 animate-slide-delayed"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
          aria-label="Connect Your World"
        >
          Connect Your World
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Explore the Future of Connectivity with Smart IoT Solutions
        </motion.p>

        <motion.button
          className="group flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleScrollDown}
        >
          Get Started
          <IconArrowRight className="group-hover:translate-x-1 transition-transform duration-300 font-bold" />
        </motion.button>

        {/* Floating IoT Devices */}
        <motion.div
          className="absolute bottom-10 left-20 w-60 h-50 bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a"
            alt="Smart Home Device"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-20 w-60 h-50 bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a"
            alt="Smart Home Device"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="absolute top-20 right-20 w-60 h-50 bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden"
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f"
            alt="IoT Sensor"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="absolute top-20 left-20 w-60 h-50 bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden"
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f"
            alt="IoT Sensor"
            className="w-full h-full object-cover"
          />
        </motion.div>

        

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 transform cursor-pointer"
          onClick={handleScrollDown}
          role="button"
          aria-label="Scroll Down"
        >
          <IconArrowDown className="animate-bounce text-white" size={50}  />
        </motion.div>
      </div>
    </div>
  );
};

export default IoTHeroSection;
