import { motion } from "framer-motion";
import { useEffect } from "react";

const ApproachSection = () => {
  const approaches = [
    {
      id: 1,
      title: "Simplified Block-Based Design",
      description: "Provide an intuitive drag-and-drop interface for creating code visually without overwhelming complexity",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.1"
    },
    {
      id: 2,
      title: "Logical Flow and Structure",
      description: "Focus on helping users learn the logical flow of programming through structured and interlinked blocks",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.1"
    },
    {
      id: 3,
      title: "Dynamic Code Preview",
      description: "Provide real-time code previews and visual outputs as users assemble blocks, reinforcing the connection between blocks and actual code",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.1"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Approach
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine strategic thinking with innovative solutions to deliver exceptional results for our clients
          </p>
        </div>

        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {approaches.map((approach) => (
            <motion.div
              key={approach.id}
              className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="w-full md:w-1/3 h-64 rounded-lg overflow-hidden">
                <img
                  src={approach.image}
                  alt={approach.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="w-full md:w-2/3 space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  {approach.title}
                </h3>
                <p className="text-lg text-gray-600">
                  {approach.description}
                </p>
                <div className="pt-4">
                  <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ApproachSection;