import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaCode, FaPencilRuler, FaRocket, FaUserCheck, FaCogs, FaCheckCircle } from "react-icons/fa";

const ProcessSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const processes = [
    {
      phase: "Phase 1",
      title: "Requirements Gathering",
      description: "Understanding client needs, project scope, and defining clear objectives for successful delivery.",
      icon: <FaPencilRuler className="text-4xl text-blue-500" />,
      year: "Week 1-2"
    },
    {
      phase: "Phase 2",
      title: "Design & Planning",
      description: "Creating wireframes, prototypes, and detailed technical specifications for the project.",
      icon: <FaUserCheck className="text-4xl text-green-500" />,
      year: "Week 3-4"
    },
    {
      phase: "Phase 3",
      title: "Development",
      description: "Implementing the core functionality and features according to the approved design.",
      icon: <FaCode className="text-4xl text-purple-500" />,
      year: "Week 5-8"
    },
    {
      phase: "Phase 4",
      title: "Testing & QA",
      description: "Rigorous testing to ensure quality, performance, and bug-free functionality.",
      icon: <FaCogs className="text-4xl text-yellow-500" />,
      year: "Week 9-10"
    },
    {
      phase: "Phase 5",
      title: "Deployment",
      description: "Launching the application to production environment with proper configuration.",
      icon: <FaRocket className="text-4xl text-red-500" />,
      year: "Week 11"
    },
    {
      phase: "Phase 6",
      title: "Maintenance & Support",
      description: "Ongoing support, updates, and maintenance to ensure optimal performance.",
      icon: <FaCheckCircle className="text-4xl text-teal-500" />,
      year: "Ongoing"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Web and App Development Process
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A systematic approach to delivering high-quality digital solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-gray-400">
                  {process.phase}
                </span>
                <span className="text-sm font-semibold text-blue-400">
                  {process.year}
                </span>
              </div>
              <div className="flex items-center mb-4">
                <div className="mr-4">{process.icon}</div>
                <h3 className="text-xl font-bold text-white">{process.title}</h3>
              </div>
              <p className="text-gray-400">{process.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;