import React, { useEffect } from "react";
// import { FaDatabase, FaChartBar, FaCogs, FaBrain, FaMobileAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const IoTProcessSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const steps = [
    {
    //   icon: <FaDatabase className="text-4xl text-blue-500" />,
      title: "Data Collection",
      description: "Gathering IoT sensor data from multiple endpoints and devices"
    },
    {
    //   icon: <FaCogs className="text-4xl text-green-500" />,
      title: "Processing",
      description: "Real-time processing of collected data through our advanced systems"
    },
    {
    //   icon: <FaChartBar className="text-4xl text-purple-500" />,
      title: "Analysis",
      description: "Deep analysis using AI algorithms to extract meaningful insights"
    },
    {
    //   icon: <FaBrain className="text-4xl text-red-500" />,
      title: "Intelligence",
      description: "Converting data into actionable intelligence for better decision making"
    },
    {
    //   icon: <FaMobileAlt className="text-4xl text-yellow-500" />,
      title: "Implementation",
      description: "Deploying solutions across devices with real-time monitoring"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-green-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            data-aos="fade-down"
          >
            Our Process
          </h2>
          <p 
            className="text-lg text-blue-200 max-w-2xl mx-auto"
            data-aos="fade-up"
          >
            Transforming IoT data into intelligent solutions through our comprehensive approach
          </p>
        </div>

        <div className="relative">
          {/* Animated Tracking Beam */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500">
            <div className="absolute top-0 left-0 w-full h-full animate-beam">
              <div className="w-20 h-full bg-white/30 blur-sm transform -skew-x-12" />
            </div>
          </div>

          {/* Process Steps */}
          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8 z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                data-aos={index % 2 === 0 ? "fade-down" : "fade-up"}
                data-aos-delay={index * 100}
                className="group relative bg-white/10 backdrop-blur-lg rounded-lg p-6 transition-all duration-300 hover:bg-white/20 hover:transform hover:-translate-y-2"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center">
                  {/* {step.icon} */}
                </div>
                <div className="mt-8 text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-blue-200">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes beam {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-beam {
          animation: beam 3s infinite linear;
        }
      `}</style>
    </section>
  );
};

export default IoTProcessSection;



//    Code Apporach section

// import React, { useState, useEffect } from "react";
// import { BsLightningCharge, BsGear, BsGraphUp, BsCheck2Circle } from "react-icons/bs";

// const ProcessSection = () => {
//   const [activeStep, setActiveStep] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveStep((prev) => (prev === 3 ? 0 : prev + 1));
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const processSteps = [
//     {
//       icon: <BsLightningCharge className="text-4xl" />,
//       title: "Identify Needs",
//       description: "Analysis of requirements and current infrastructure assessment",
//     },
//     {
//       icon: <BsGear className="text-4xl" />,
//       title: "Develop Solutions",
//       description: "Custom IoT solution design and architecture planning",
//     },
//     {
//       icon: <BsGraphUp className="text-4xl" />,
//       title: "Implementation",
//       description: "Seamless deployment and integration of IoT systems",
//     },
//     {
//       icon: <BsCheck2Circle className="text-4xl" />,
//       title: "Monitor & Optimize",
//       description: "Continuous monitoring and performance optimization",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             Transforming businesses through innovative IoT solutions with our proven systematic approach
//           </p>
//         </div>

//         <div className="relative">
//           {/* Animated Beam */}
//           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//             <div className="w-full h-1 bg-gray-700">
//               <div
//                 className="h-full bg-blue-500 transition-all duration-1000 ease-in-out"
//                 style={{ width: `${(activeStep + 1) * 25}%` }}
//               >
//                 <div className="absolute h-3 w-3 bg-blue-500 rounded-full -right-1.5 -top-1 animate-pulse shadow-lg shadow-blue-500/50" />
//               </div>
//             </div>
//           </div>

//           {/* Process Steps */}
//           <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 pt-8">
//             {processSteps.map((step, index) => (
//               <div
//                 key={index}
//                 className={`flex flex-col items-center p-6 rounded-lg transition-all duration-300 ${index === activeStep ? "bg-gray-800/50 transform scale-105" : "bg-gray-800/30"}`}
//                 onMouseEnter={() => setActiveStep(index)}
//               >
//                 <div
//                   className={`mb-4 p-4 rounded-full ${index === activeStep ? "bg-blue-500/20 text-blue-400" : "bg-gray-700/50 text-gray-400"} transition-colors duration-300`}
//                 >
//                   {step.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
//                 <p className="text-gray-400 text-center">{step.description}</p>
//                 <div
//                   className={`mt-4 h-2 w-2 rounded-full ${index <= activeStep ? "bg-blue-500" : "bg-gray-700"}`}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Decorative Elements */}
//         <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//           <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl" />
//           <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProcessSection;
















// code  Apporach section

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { FaServer, FaNetworkWired, FaDatabase, FaMobileAlt, FaChartLine } from "react-icons/fa";

// const ProcessStep = ({ title, description, icon: Icon, isActive, index, length }) => {
//   return (
//     <div className="flex flex-col items-center relative w-full">
//       <motion.div
//         whileHover={{ scale: 1.1 }}
//         className={`z-10 flex items-center justify-center w-16 h-16 rounded-full ${isActive ? "bg-blue-600" : "bg-gray-200"} cursor-pointer transition-colors duration-300`}
//       >
//         <Icon className={`text-2xl ${isActive ? "text-white" : "text-gray-600"}`} />
//       </motion.div>
//       <div className="absolute top-8 w-full">
//         {index < length - 1 && (
//           <div className={`h-0.5 ${isActive ? "bg-blue-600" : "bg-gray-200"} transition-colors duration-300`}></div>
//         )}
//       </div>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2 }}
//         className="mt-4 text-center"
//       >
//         <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
//         <p className="text-sm text-gray-600 max-w-xs">{description}</p>
//       </motion.div>
//     </div>
//   );
// };

// const OurProcess = () => {
//   const [activeStep, setActiveStep] = useState(0);

//   const steps = [
//     {
//       icon: FaServer,
//       title: "Data Collection",
//       description: "Gathering IoT sensor data from various devices and endpoints"
//     },
//     {
//       icon: FaNetworkWired,
//       title: "Network Processing",
//       description: "Secure transmission and initial processing of collected data"
//     },
//     {
//       icon: FaDatabase,
//       title: "Data Storage",
//       description: "Storing processed data in scalable cloud infrastructure"
//     },
//     {
//       icon: FaMobileAlt,
//       title: "Application Integration",
//       description: "Integrating data with mobile and web applications"
//     },
//     {
//       icon: FaChartLine,
//       title: "Analytics & Insights",
//       description: "Generating actionable insights through advanced analytics"
//     }
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const windowHeight = window.innerHeight;
//       const documentHeight = document.documentElement.scrollHeight;
      
//       const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;
//       const stepPercentage = 100 / steps.length;
//       const currentStep = Math.min(
//         Math.floor(scrollPercentage / stepPercentage),
//         steps.length - 1
//       );
      
//       setActiveStep(currentStep);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [steps.length]);

//   return (
//     <div className="w-full bg-white py-16 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <motion.h2
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
//           >
//             Our IoT Process
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-lg text-gray-600"
//           >
//             Transforming raw data into meaningful insights
//           </motion.p>
//         </div>

//         <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-4 relative">
//           {steps.map((step, index) => (
//             <ProcessStep
//               key={index}
//               {...step}
//               index={index}
//               length={steps.length}
//               isActive={index <= activeStep}
//               onClick={() => setActiveStep(index)}
//             />
//           ))}
//         </div>

//         <div className="flex justify-center mt-12">
//           <button
//             onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
//             className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg transform hover:scale-105 transition-transform duration-200"
//           >
//             {activeStep === steps.length - 1 ? "Restart Process" : "Next Step"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurProcess;