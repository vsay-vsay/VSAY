import React, { useState, useEffect } from "react";
// import { FaRobot, FaCog, FaMicrochip, FaChartLine } from "react-icons/fa";
import { IconRobot, IconChartHistogram, IconCpu, IconSettings } from '@tabler/icons-react';
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const AboutService = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const parallaxY = useTransform(scrollY, [0, 1000], [0, -150]);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  // Your existing data arrays remain unchanged
  const features = [
    {
      icon: <IconRobot className="text-4xl text-blue-500" />,
      title: "Advanced Robotics",
      description: "Cutting-edge robotic solutions for industrial automation"
    },
    {
      icon: <IconSettings className="text-4xl text-blue-500" />,
      title: "Smart Integration",
      description: "Seamless integration with existing systems and workflows"
    },
    {
      icon: <IconCpu className="text-4xl text-blue-500" />,
      title: "AI-Powered",
      description: "Intelligent decision-making capabilities through advanced AI"
    },
    {
      icon: <IconChartHistogram className="text-4xl text-blue-500" />,
      title: "Performance Analytics",
      description: "Real-time monitoring and performance optimization"
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Lead Robotics Engineer",
      image: "images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      bio: "15+ years experience in industrial robotics"
    },
    {
      name: "Mark Rodriguez",
      role: "AI Specialist",
      image: "images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      bio: "Expert in machine learning and robotics AI"
    },
    {
      name: "Dr. Emily Watson",
      role: "Systems Architect",
      image: "images.unsplash.com/photo-1580489944761-15a19d654956",
      bio: "Specialized in complex robotic system design"
    }
  ];

  const testimonials = [
    {
      text: "The robotics service has transformed our manufacturing process completely.",
      author: "John Smith",
      position: "Operations Director, TechCorp",
      image: "images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    {
      text: "Incredible ROI and superior technical support throughout implementation.",
      author: "Lisa Johnson",
      position: "CEO, Innovation Labs",
      image: "images.unsplash.com/photo-1494790108377-be9c29b29330"
    }
  ];

  const timeline = [
    {
      year: "2018",
      event: "Company Founded",
      description: "Started with a vision to revolutionize industrial automation"
    },
    {
      year: "2019",
      event: "First Major Project",
      description: "Successfully deployed robotics solution for Fortune 500 company"
    },
    {
      year: "2020",
      event: "AI Integration",
      description: "Launched AI-powered robotics platform"
    },
    {
      year: "2023",
      event: "Global Expansion",
      description: "Expanded services to 20+ countries"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Introduction Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUpVariants}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16"
      >
        <h1 className="text-5xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">
          Next-Generation Robotics Solutions
        </h1>
        <p className="text-xl text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Empowering industries with cutting-edge robotics technology, bringing automation and efficiency to your operations through innovative solutions and expert implementation.
        </p>
      </motion.section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUpVariants}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, backgroundColor: "#f8fafc" }}
                className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl dark:text-gray-100 text-gray-900 font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="text-4xl font-bold text-white mb-8"
          >
            Ready to Transform Your Operations?
          </motion.h2>
          <Link href="/contactus#contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: ["0 0 0 0 rgba(255,255,255,0.4)", "0 0 0 20px rgba(255,255,255,0)"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Request a Demo
          </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutService;
