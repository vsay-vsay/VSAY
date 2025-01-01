// import React from "react";
// import { motion } from "framer-motion";
// import { FiPrinter, FiSettings, FiAward, FiHeadphones } from "react-icons/fi";


// const PrintingSection = () => {
//   const benefits = [
//     {
//       icon: <FiPrinter className="w-8 h-8 text-cyan-400" />,
//       title: "High-Precision Printing",
//       description: "State-of-the-art 3D printers delivering accuracy and detail in every layer."
//     },
//     {
//       icon: <FiSettings className="w-8 h-8 text-cyan-400" />,
//       title: "Customizable Designs",
//       description: "Tailor your prints to meet unique specifications with our flexible solutions."
//     },
//     {
//       icon: <FiAward className="w-8 h-8 text-cyan-400" />,
//       title: "Premium Quality",
//       description: "Industry-leading materials and technology ensuring durability and reliability."
//     },
//     {
//       icon: <FiHeadphones className="w-8 h-8 text-cyan-400" />,
//       title: "Expert Support",
//       description: "Dedicated customer service to assist you at every stage of your project."
//     }
//   ];

//   return (
//     <div className="relative min-h-screen bg-white dark:bg-black py-20 overflow-hidden">
//       <div className="absolute inset-0 opacity-5 bg-cover bg-center" />
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="text-center mb-16">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4"
//           >
//             Why Choose Our 3D Printing Services?
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
//           >
//             Revolutionize your manufacturing process with cutting-edge 3D printing technology.
//           </motion.p>
//         </div>

//         <div className="grid grid-cols-1 gap-8">
//           {benefits.map((benefit, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className="dark:bg-gray-800 bg-gray-200 bg-opacity-50 backdrop-blur-lg rounded-xl p-8 border border-gray-300 dark:border-gray-700 hover:border-cyan-400 transition-all duration-300 cursor-pointer"
//               role="article"
//               aria-label={`Benefit card: ${benefit.title}`}
//             >
//               <div className="flex items-center space-x-6">
//                 <div className="p-3 dark:bg-gray-700 bg-gray-300 rounded-lg">
//                   {benefit.icon}
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-xl font-semibold dark:text-gray-100 text-gray-800 mb-2">
//                     {benefit.title}
//                   </h3>
//                   <p className="dark:text-gray-300 text-gray-700">
//                     {benefit.description}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PrintingSection;

import React from "react";
import { motion } from "framer-motion";
import { FiPrinter, FiSettings, FiAward, FiHeadphones } from "react-icons/fi";
import Image from "next/image";
import { printingpage7 } from "@/app/images";

const PrintingSection = () => {
  const benefits = [
    {
      icon: <FiPrinter className="w-8 h-8 text-cyan-400" />,
      title: "High-Precision Printing",
      description: "State-of-the-art 3D printers delivering accuracy and detail in every layer.",
    },
    {
      icon: <FiSettings className="w-8 h-8 text-cyan-400" />,
      title: "Customizable Designs",
      description: "Tailor your prints to meet unique specifications with our flexible solutions.",
    },
    {
      icon: <FiAward className="w-8 h-8 text-cyan-400" />,
      title: "Premium Quality",
      description: "Industry-leading materials and technology ensuring durability and reliability.",
    },
    {
      icon: <FiHeadphones className="w-8 h-8 text-cyan-400" />,
      title: "Expert Support",
      description: "Dedicated customer service to assist you at every stage of your project.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white dark:bg-black py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-cover bg-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4"
          >
            Why Choose Our 3D Printing Services?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Revolutionize your manufacturing process with cutting-edge 3D printing technology.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Section - Benefits */}
          <div className="grid grid-cols-1 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="dark:bg-gray-800 bg-gray-200 bg-opacity-50 backdrop-blur-lg rounded-xl p-8 border border-gray-300 dark:border-gray-700 hover:border-cyan-400 transition-all duration-300 cursor-pointer"
                role="article"
                aria-label={`Benefit card: ${benefit.title}`}
              >
                <div className="flex items-center space-x-6">
                  <div className="p-3 dark:bg-gray-700 bg-gray-300 rounded-lg">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold dark:text-gray-100 text-gray-800 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="dark:text-gray-300 text-gray-700">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Section - Animated Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="relative w-full h-full lg:h-[700px]"
          >
            <Image
              src= {printingpage7}
              alt="3D Printing Illustration"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PrintingSection;
