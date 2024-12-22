import React from "react";
import { motion } from "framer-motion";
// import { FaRobot, FaCloud, FaMobileAlt, FaChartLine } from "react-icons/fa";

const IoTAboutService = () => {
  const services = [
    {
    //   icon: <FaRobot className="text-4xl text-blue-500" />,
      title: "Smart Automation",
      description: "Integrate intelligent automation systems for enhanced efficiency and control."
    },
    {
    //   icon: <FaCloud className="text-4xl text-blue-500" />,
      title: "Cloud Connection",
      description: "Seamless cloud connectivity for real-time data monitoring and analysis."
    },
    {
    //   icon: <FaMobileAlt className="text-4xl text-blue-500" />,
      title: "Mobile Control",
      description: "Control your IoT devices from anywhere using our mobile solutions."
    },
    {
    //   icon: <FaChartLine className="text-4xl text-blue-500" />,
      title: "Data Analytics",
      description: "Advanced analytics to derive meaningful insights from your IoT data."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 hover:text-blue-600 transition-colors duration-300">
            Transforming Business with IoT Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our cutting-edge IoT services empower businesses to embrace digital transformation and achieve unprecedented levels of efficiency and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="mb-6"
                >
                  {/* {service.icon} */}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Explore Our Services
          </button>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6"
              alt="Smart IoT Technology Solution"
              className="rounded-2xl shadow-2xl w-full object-cover h-[500px] hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-800">
              Why Choose Our IoT Solutions?
            </h3>
            <p className="text-gray-600 text-lg">
              Our comprehensive IoT ecosystem provides end-to-end solutions that help businesses optimize operations, reduce costs, and drive innovation. With advanced security measures and scalable architecture, we ensure your IoT implementation is future-proof.
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center">
                <span className="h-2 w-2 bg-blue-500 rounded-full mr-3"></span>
                Enterprise-grade security protocols
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-blue-500 rounded-full mr-3"></span>
                24/7 monitoring and support
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-blue-500 rounded-full mr-3"></span>
                Scalable and flexible solutions
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default IoTAboutService;