import { motion } from "framer-motion";
import { FaPlane, FaCamera, FaBatteryFull, FaCog, FaWifi, FaShieldAlt } from "react-icons/fa";

const AboutDrone = () => {
  const features = [
    {
      icon: <FaPlane className="text-4xl text-blue-500" />,
      title: "Advanced Flight Control",
      description: "Precise navigation and stability in various weather conditions"
    },
    {
      icon: <FaCamera className="text-4xl text-blue-500" />,
      title: "4K Camera System",
      description: "Capture stunning aerial views with high-resolution cameras"
    },
    {
      icon: <FaBatteryFull className="text-4xl text-blue-500" />,
      title: "Extended Battery Life",
      description: "Up to 45 minutes of flight time on a single charge"
    },
    {
      icon: <FaCog className="text-4xl text-blue-500" />,
      title: "Intelligent Features",
      description: "Smart tracking and autonomous flight capabilities"
    },
    {
      icon: <FaWifi className="text-4xl text-blue-500" />,
      title: "Real-time Transmission",
      description: "Live HD video feed with minimal latency"
    },
    {
      icon: <FaShieldAlt className="text-4xl text-blue-500" />,
      title: "Safety Features",
      description: "Advanced obstacle avoidance and return-to-home function"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const droneVariants = {
    animate: {
      x: ["-100vw", "100vw"],
      y: [0, -30, 0],
      transition: {
        x: {
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        },
        y: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      >
        <motion.img
          src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
          alt="Moving Drone"
          className="w-16 h-16 object-contain"
          variants={droneVariants}
          animate="animate"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Discover the Future of Drone Technology</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the next generation of aerial innovation with our cutting-edge drone technology. 
            Combining precision engineering with intelligent features for unparalleled performance.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-12 mb-20"
        >
          <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Why Our Drones Stand Out?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <p>Industry-leading flight time and range capabilities</p>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <p>Advanced stabilization for professional-grade footage</p>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <p>24/7 technical support and maintenance services</p>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
            <p className="text-gray-300 mb-4">
              We"re dedicated to pushing the boundaries of what"s possible in aerial technology while maintaining 
              our commitment to sustainability and environmental responsibility.
            </p>
            <p className="text-gray-300">
              Every drone is crafted with precision, undergoes rigorous quality testing, and is backed by 
              our comprehensive warranty program.
            </p>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full 
            transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Learn More About Our Drones
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutDrone;