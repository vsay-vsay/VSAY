import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-red-50">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 h-screen relative overflow-hidden"
        >
          <div
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-4.0.3')"
            }}
            className="absolute inset-0 bg-cover bg-center opacity-90 transition-transform duration-700 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 via-pink-900/40 to-red-900/30"></div>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="lg:w-1/2 flex flex-col justify-center px-8 lg:px-24 py-20 bg-white/90 backdrop-blur-sm shadow-2xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-semibold text-lg mb-4"
          >
            Welcome to Excellence
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900"
          >
            Craft Your Legacy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl"
          >
            Discover timeless elegance and innovation in design. Our expert team crafts bespoke solutions that bring your vision to life, elevating your brand with creativity and sophistication          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-purple-500/30"
              aria-label="Explore Our Services"
            >
              <span>Explore Services</span>
              <FiArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 border-2 border-gray-900 text-gray-900 rounded-full text-lg font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-gray-500/30"
              aria-label="Learn More About Us"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;