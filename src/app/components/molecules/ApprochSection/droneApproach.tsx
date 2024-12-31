import { motion } from "framer-motion";
import { FiCamera, FiMap, FiAirplay, FiPackage, FiWind, FiVideo, FiNavigation, FiBox } from "react-icons/fi";

const ApproachSection = () => {
  const services = [
    {
      icon: <FiCamera className="w-8 h-8" />,
      title: "Aerial Photography",
      description: "Capture stunning aerial imagery and video using state-of-the-art drones.",
      bgImage: "https://images.unsplash.com/photo-1473968512647-3e447244af8f"
    },
    {
      icon: <FiMap className="w-8 h-8" />,
      title: "Drone Mapping",
      description: "Utilize drones for precise mapping and surveying of large areas.",
      bgImage: "https://images.unsplash.com/photo-1508614589041-895b88991e3e"
    },
    {
      icon: <FiAirplay className="w-8 h-8" />,
      title: "Drone Inspections",
      description: "Conduct detailed inspections of hard-to-reach places safely and efficiently.",
      bgImage: "https://images.unsplash.com/photo-1579829366248-204fe8413f31"
    },
    {
      icon: <FiPackage className="w-8 h-8" />,
      title: "Drone Delivery",
      description: "Leverage drone technology for fast and efficient package delivery services.",
      bgImage: "https://images.unsplash.com/photo-1579829366248-204fe8413f31"
    },
    {
      icon: <FiWind className="w-8 h-8" />,
      title: "Custom Drone Solutions",
      description: "Tailored drone solutions for your specific industry needs and requirements.",
      bgImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837"
    },
    {
      icon: <FiVideo className="w-8 h-8" />,
      title: "Cinematic Footage",
      description: "Professional-grade aerial videography for films and documentaries.",
      bgImage: "https://images.unsplash.com/photo-1552168324-d612d77725e3"
    },
    {
      icon: <FiNavigation className="w-8 h-8" />,
      title: "Precision Agriculture",
      description: "Advanced drone technology for crop monitoring and agricultural planning.",
      bgImage: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff"
    },
    {
      icon: <FiBox className="w-8 h-8" />,
      title: "Emergency Services",
      description: "Rapid response drone solutions for emergency and rescue operations.",
      bgImage: "https://images.unsplash.com/photo-1579829366248-204fe8413f31"
    }
  ];

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto min-h-screen py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          {/* Left Section - Image Carousel */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <motion.img
  src={services[0].bgImage}
  alt="Drone Services"
  className="w-full h-full object-cover"
  animate={{ scale: 1.1 }}
  transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
  onError={(e) => {
    const target = e.target as HTMLImageElement;
    target.src = "https://images.unsplash.com/photo-1473968512647-3e447244af8f";
  }}


            />
            <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>
          </div>

          {/* Right Section - Content */}
          <div className="flex flex-col justify-center px-6 lg:px-12">
            <motion.div variants={itemVariants}>
              <h2 className="text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Our Drone Services
              </h2>
              <p className="text-gray-300 mb-12 text-lg">
                Discover how our advanced drone technology can revolutionize your business operations and elevate your capabilities to new heights.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={`${service.title}-${index}`} // Unique key
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300"
                  >
                    <div className="text-blue-400 p-3 bg-gray-900 rounded-lg shadow-lg">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-400 text-sm">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12 inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
                aria-label="Learn more about our services"
              >
                Explore Our Services
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ApproachSection;
