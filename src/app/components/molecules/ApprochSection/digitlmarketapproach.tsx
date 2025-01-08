import React, { useState } from "react";
import { FaSearch, FaAd, FaHashtag, FaPen, FaChartLine, FaUsers, FaBullseye, FaCogs } from "react-icons/fa";

const ApproachSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const approaches = [
    {
      icon: <FaChartLine className="text-4xl text-blue-500 group-hover:text-white" />,
      title: "Data-Driven Strategy",
      description: "We analyze market trends and user behavior to create targeted campaigns that deliver results"
    },
    {
      icon: <FaUsers className="text-4xl text-blue-500 group-hover:text-white" />,
      title: "Audience Targeting",
      description: "Identify and reach your ideal customers through precise demographic targeting"
    },
    {
      icon: <FaBullseye className="text-4xl text-blue-500 group-hover:text-white" />,
      title: "Performance Tracking",
      description: "Monitor campaign performance in real-time and optimize for maximum ROI"
    },
    {
      icon: <FaCogs className="text-4xl text-blue-500 group-hover:text-white" />,
      title: "Continuous Optimization",
      description: "Regular refinement of strategies based on performance metrics and market changes"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Our Digital Marketing Approach</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine data-driven insights with creative strategies to deliver exceptional results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {approaches.map((approach, index) => (
            <div
              key={index}
              className={`bg-white bg-opacity-5 backdrop-blur-lg p-8 rounded-xl group hover:bg-blue-600 transition-all duration-300 cursor-pointer transform hover:-translate-y-2 ${index === activeStep ? "border-2 border-blue-500" : ""}`}
              onClick={() => setActiveStep(index)}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">{approach.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{approach.title}</h3>
                <p className="text-gray-300 group-hover:text-white">{approach.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white bg-opacity-5 backdrop-blur-lg rounded-xl p-10 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our Approach?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-gray-300">
              <h3 className="text-xl font-semibold text-white mb-4">Data-Backed Decisions</h3>
              <p className="mb-6">Every strategy we implement is backed by thorough market research and data analysis, ensuring maximum effectiveness.</p>
              <h3 className="text-xl font-semibold text-white mb-4">Customized Solutions</h3>
              <p>We understand that every business is unique. Our approaches are tailored to meet your specific goals and challenges.</p>
            </div>
            <div className="text-gray-300">
              <h3 className="text-xl font-semibold text-white mb-4">Transparent Reporting</h3>
              <p className="mb-6">Regular updates and detailed reports keep you informed about your campaign's performance and ROI.</p>
              <h3 className="text-xl font-semibold text-white mb-4">Agile Methodology</h3>
              <p>Our flexible approach allows us to quickly adapt strategies based on market changes and performance data.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105">
            Schedule a Strategy Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApproachSection;
