import React, { useState } from "react";
import { motion } from "framer-motion";
// import { FaRobot, FaLightbulb, FaTools, FaUserCog, FaChartLine, FaHandshake } from "react-icons/fa";

const WhyChooseUsSection = () => {
  // const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      // icon: <FaRobot className="text-5xl text-blue-500" />,
      title: "Advanced Robotics",
      description: "Cutting-edge robotic solutions powered by state-of-the-art technology and innovation."
    },
    {
    //   icon: <FaLightbulb className="text-5xl text-yellow-500" />,
      title: "Innovative Solutions",
      description: "Custom-tailored solutions that adapt to your unique automation challenges."
    },
    {
    //   icon: <FaTools className="text-5xl text-purple-500" />,
      title: "Precision Engineering",
      description: "Meticulous attention to detail ensuring optimal performance and reliability."
    },
    {
    //   icon: <FaUserCog className="text-5xl text-green-500" />,
      title: "Expert Team",
      description: "Dedicated professionals with years of experience in robotics and automation."
    },
    {
    //   icon: <FaChartLine className="text-5xl text-red-500" />,
      title: "Performance Metrics",
      description: "Real-time monitoring and analytics for enhanced operational efficiency."
    },
    {
    //   icon: <FaHandshake className="text-5xl text-indigo-500" />,
      title: "Reliable Support",
      description: "24/7 technical support and maintenance services for seamless operations."
    }
  ];

  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of robotics with our innovative solutions and expert team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl"
              >
              {/* <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: hoveredIndex === index ? 1.1 : 1 }}
                transition={{ duration: 0.2 }}
                className="mb-6"
              >
                 {feature.icon}
              </motion.div> */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label={`Learn more about ${feature.title}`}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUsSection;

// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const WhyChooseUsSection = () => {
//   // const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   const features = [
//     {
//       title: "Advanced Robotics",
//       description: "Cutting-edge robotic solutions powered by state-of-the-art technology and innovation.",
//     },
//     {
//       title: "Innovative Solutions",
//       description: "Custom-tailored solutions that adapt to your unique automation challenges.",
//     },
//     {
//       title: "Precision Engineering",
//       description: "Meticulous attention to detail ensuring optimal performance and reliability.",
//     },
//     {
//       title: "Expert Team",
//       description: "Dedicated professionals with years of experience in robotics and automation.",
//     },
//     {
//       title: "Performance Metrics",
//       description: "Real-time monitoring and analytics for enhanced operational efficiency.",
//     },
//     {
//       title: "Reliable Support",
//       description: "24/7 technical support and maintenance services for seamless operations.",
//     },
//   ];

//   return (
//     <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="max-w-7xl mx-auto"
//       >
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Experience the future of robotics with our innovative solutions and expert team.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.02 }}
//               onHoverStart={() => setHoveredIndex(index)}
//               onHoverEnd={() => setHoveredIndex(null)}
//               className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl"
//             >
//               <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
//               <p className="text-gray-600 mb-6">{feature.description}</p>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//                 aria-label={`Learn more about ${feature.title}`}
//               >
//                 Learn More
//               </motion.button>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="text-center mt-16"
//         >
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//           >
//             Get Started Today
//           </motion.button>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default WhyChooseUsSection;
