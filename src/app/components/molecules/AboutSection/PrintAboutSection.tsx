import React from "react";
import { motion } from "framer-motion";
import { FaCubes, FaDraftingCompass, FaRecycle, FaTools, FaCube, FaPrint } from "react-icons/fa";

const About3DPrinting = () => {
  const features = [
    { icon: <FaCubes className="text-4xl text-blue-500" />, title: "Advanced 3D Printing", description: "High-precision prototyping and production using the latest 3D printing technology." },
    { icon: <FaDraftingCompass className="text-4xl text-blue-500" />, title: "Custom Designs", description: "Tailored solutions to meet your unique manufacturing needs and ideas." },
    { icon: <FaRecycle className="text-4xl text-blue-500" />, title: "Sustainable Materials", description: "Eco-friendly materials for sustainable and responsible production." },
    { icon: <FaTools className="text-4xl text-blue-500" />, title: "Rapid Iteration", description: "Quick design iterations for faster innovation and development." },
    { icon: <FaCube className="text-4xl text-blue-500" />, title: "Wide Material Range", description: "Choose from a variety of materials for durable and functional parts." },
    { icon: <FaPrint className="text-4xl text-blue-500" />, title: "On-Demand Production", description: "Flexibility to scale production based on your needs and timelines." },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Unlock the Future with 3D Printing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionize manufacturing with cutting-edge 3D printing technology designed for precision, speed, and sustainability.
          </p>
        </motion.div>

        {/* Features Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-start space-x-4"
            >
              <div>{feature.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our 3D Printing Solutions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Benefits</h3>
              <ul className="text-gray-300 space-y-3">
                <li>✓ High-resolution, accurate prints</li>
                <li>✓ Wide material compatibility</li>
                <li>✓ Fast turnaround for projects</li>
                <li>✓ Scalable for small or large productions</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Our Commitment</h3>
              <ul className="text-gray-300 space-y-3">
                <li>✓ Continuous innovation in 3D printing</li>
                <li>✓ Customized solutions for your needs</li>
                <li>✓ Environmentally friendly practices</li>
                <li>✓ Expert support and guidance</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Discover More About 3D Printing
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About3DPrinting;
