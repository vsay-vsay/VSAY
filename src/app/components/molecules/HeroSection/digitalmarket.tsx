import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

const DigitalHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCTAClick = () => {
    console.log("CTA clicked - Track analytics here");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Digital Marketing Background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Elevate Your Brand with
            <span className="block text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Digital Marketing
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We offer innovative strategies and cutting-edge solutions to take your
            business to unprecedented heights in the digital landscape
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleCTAClick}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-900"
            >
              <span className="flex items-center">
                Get Started
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </button>

            <button
              onClick={handleCTAClick}
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
            >
              Learn More
            </button>
          </div>

          <div className="mt-12 flex justify-center space-x-6">
            <div className="animate-float">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 text-white">
                <p className="text-2xl font-bold">500+</p>
                <p className="text-sm">Happy Clients</p>
              </div>
            </div>
            <div className="animate-float delay-100">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 text-white">
                <p className="text-2xl font-bold">95%</p>
                <p className="text-sm">Success Rate</p>
              </div>
            </div>
            <div className="animate-float delay-200">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 text-white">
                <p className="text-2xl font-bold">24/7</p>
                <p className="text-sm">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalHeroSection;