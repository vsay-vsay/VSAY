import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

const RoboticsApproachSection: React.FC = () => {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 1000], [0, -30]);

  const timeline = [
    {
      year: "Research",
      event: "",
      description: "In-depth analysis of requirements and market research to identify optimal robotic solutions. We evaluate technological feasibility and conduct comprehensive competitor analysis.",
    },
    {
      year: "Design",
      event: "",
      description: "Creating detailed blueprints and 3D models of robotic systems using cutting-edge design tools. Our expert team focuses on both aesthetic appeal and functional efficiency.",
    },
    {
      year: "Growth",
      event: "",
      description: "Converting designs into fully functional robotic systems through precise engineering and programming. We implement advanced algorithms and control systems for optimal performance.",
    },
    {
      year: "Testing",
      event: "",
      description: "Rigorous quality assurance and performance testing to ensure reliability and safety. Each robot undergoes extensive trials in simulated real-world environments.",
    },
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section style={{ y: parallaxY }} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Process / Approach
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              transition={{ delay: index * 0.2 }}
              className="flex mb-8"
            >
              <div className="w-24 flex-shrink-0 text-lg font-bold text-blue-500">
                {item.year}
              </div>
              <div className="flex-grow pl-8 border-l-2 border-blue-500">
                <h3 className="text-xl font-semibold mb-2">{item.event}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default RoboticsApproachSection;
