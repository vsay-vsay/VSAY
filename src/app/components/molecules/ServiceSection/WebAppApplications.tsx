import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaShoppingCart, FaChartLine, FaUserFriends, FaCog } from "react-icons/fa";

const WebAppApplications = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const applications = [
    {
      title: "Enterprise Solutions",
      description: "Scalable and secure web applications for large-scale business operations",
      icon: <FaLaptopCode className="text-5xl text-blue-600" />,
      metrics: "99.9% Uptime"
    },
    {
      title: "Mobile Applications",
      description: "Cross-platform mobile apps with seamless user experience",
      icon: <FaMobileAlt className="text-5xl text-green-600" />,
      metrics: "4.8+ App Rating"
    },
    {
      title: "E-Commerce Platforms",
      description: "Full-featured online stores with secure payment integration",
      icon: <FaShoppingCart className="text-5xl text-purple-600" />,
      metrics: "2M+ Transactions"
    },
    {
      title: "Analytics Dashboards",
      description: "Real-time data visualization and reporting solutions",
      icon: <FaChartLine className="text-5xl text-yellow-600" />,
      metrics: "Real-time Insights"
    },
    {
      title: "Social Platforms",
      description: "Community-driven applications with rich interaction features",
      icon: <FaUserFriends className="text-5xl text-red-600" />,
      metrics: "1M+ Users"
    },
    {
      title: "Integration Services",
      description: "Seamless API integration and third-party service connectivity",
      icon: <FaCog className="text-5xl text-teal-600" />,
      metrics: "500+ APIs"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 opacity-5 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100"
      >
        <div className="absolute inset-0 bg-grid-pattern transform transition-transform duration-1000 ease-in-out hover:scale-110"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Web & App Development Applications
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transforming businesses through innovative digital solutions
          </p>
        </motion.div>

        <div className="relative">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center mb-12 relative"
              whileHover={{ scale: 1.05 }}
            >
              <div className={`flex-1 ${index % 2 === 0 ? "pr-8" : "pl-8"} ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{app.title}</h3>
                <p className="text-gray-600 mb-2">{app.description}</p>
                <span className="text-sm font-semibold text-blue-600">{app.metrics}</span>
              </div>
              
              <div className={`w-20 h-20 flex items-center justify-center rounded-full bg-white shadow-xl z-10 transform transition-all duration-300 hover:scale-110 hover:shadow-2xl
                ${index % 2 === 0 ? "order-last" : "order-first"}`}>
                {app.icon}
              </div>

              {index !== applications.length - 1 && (
                <div className="absolute w-px h-full bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200 left-1/2 transform -translate-x-1/2 z-0" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebAppApplications;