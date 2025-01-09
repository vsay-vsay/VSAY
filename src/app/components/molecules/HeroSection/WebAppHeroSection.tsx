import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BsChevronDoubleDown } from "react-icons/bs";

const WebAppHero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  // Transform values for enhanced motion
  const scale = useTransform(scrollY, [0, 300], [1, 1.2]);
  const rotate = useTransform(scrollY, [0, 500], [0, 10]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.6]);

  const [particles, setParticles] = useState<
    { left: string; top: string; delay: number }[]
  >([]);

  useEffect(() => {
    // Initialize particles after the component mounts
    const generatedParticles = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 2, // Spread delays for animation
    }));
    setParticles(generatedParticles);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <motion.div
        style={{ y, scale, rotate, opacity }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3')",
          }}
        >
          <motion.div
            className="absolute inset-0 bg-black/50"
            animate={{
              background: [
                "linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5))",
                "linear-gradient(180deg, rgba(0,0,100,0.5), rgba(0,0,0,0.5))",
                "linear-gradient(360deg, rgba(100,0,100,0.5), rgba(0,0,0,0.5))",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>

        {/* Stable animated particles */}
        {particles.map((particle, index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.5, 0],
              y: [0, -100],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Modern Web & App{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Development
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl"
        >
          Creating innovative digital solutions for web and mobile platforms.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="px-8 py-4 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform transition-all duration-300"
          aria-label="Start Your Project"
        >
          Start Your Project
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToContent}
          aria-label="Scroll down"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <BsChevronDoubleDown className="text-white text-4xl" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WebAppHero;
