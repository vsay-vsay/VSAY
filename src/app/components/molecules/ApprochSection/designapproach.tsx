import { motion } from "framer-motion";
import { FaPalette, FaCode, FaMobileAlt, FaPencilRuler } from "react-icons/fa";

const DesignApproach = () => {
  const services = [
    {
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user experiences through thoughtful design",
      icon: <FaPalette className="w-8 h-8" />,
      bgImage: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f"
    },
    {
      title: "Web Development",
      description: "Building responsive and modern websites with cutting-edge technologies",
      icon: <FaCode className="w-8 h-8" />,
      bgImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Mobile Design",
      description: "Crafting seamless mobile experiences for iOS and Android platforms",
      icon: <FaMobileAlt className="w-8 h-8" />,
      bgImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c"
    },
    {
      title: "Product Design",
      description: "End-to-end product design solutions focusing on user needs",
      icon: <FaPencilRuler className="w-8 h-8" />,
      bgImage: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
            Our Design Services
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            We combine creativity and technology to deliver exceptional digital experiences that drive results and engage users.
          </p>
        </motion.div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row ${index % 2 === 0 ? "" : "md:flex-row-reverse"} bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden`}
            >
              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <img
                  src={service.bgImage}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-center space-y-4">
                <div className="text-blue-400 transform transition-all duration-300 hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <button
            aria-label="Explore Our Services"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Explore Our Services
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignApproach;