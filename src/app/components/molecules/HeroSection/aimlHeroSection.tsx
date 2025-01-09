import React, { useState, useEffect } from "react";
import { BsArrowRight, BsCheckCircle, BsGraphUp, BsLightbulb } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { FaChartLine, FaDatabase, FaCogs, FaUsersCog, FaRobot, FaBrain, FaNetworkWired, FaMicrochip } from "react-icons/fa";

const AIMLHero = () => {
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("ai");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <FaRobot className="text-4xl" />,
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence solutions for business automation"
    },
    {
      icon: <FaBrain className="text-4xl" />,
      title: "Deep Learning",
      description: "Advanced neural networks for complex pattern recognition"
    },
    {
      icon: <FaNetworkWired className="text-4xl" />,
      title: "Neural Networks",
      description: "State-of-the-art network architectures for intelligent processing"
    },
    {
      icon: <FaMicrochip className="text-4xl" />,
      title: "Quantum Computing",
      description: "Next-generation computing solutions for complex problems"
    }
  ];

  const whyChooseUs = [
    {
      icon: <BsGraphUp className="text-3xl" />,
      title: "Future-Ready",
      description: "Stay ahead with cutting-edge AI and quantum technologies"
    },
    {
      icon: <BsCheckCircle className="text-3xl" />,
      title: "Quantum-Safe",
      description: "Security solutions ready for the quantum era"
    },
    {
      icon: <BsLightbulb className="text-3xl" />,
      title: "Innovation Hub",
      description: "Pioneering next-generation technological breakthroughs"
    }
  ];

  return (
    <div className="font-poppins bg-black text-white">
      <div 
        className="relative min-h-[100vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-purple-900/50 to-black/90"></div>
        <div className={`relative text-center p-8 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="text-sm uppercase tracking-wider mb-4 text-purple-400">Welcome to the future</div>
            <h1 className="text-7xl md:text-8xl font-bold mb-6 leading-tight">
              Quantum AI
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                Revolution
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience the convergence of Quantum Computing and Artificial Intelligence. Shape the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => setShowModal(true)}
                className="group relative px-8 py-4 overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  Discover More
                  <BsArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="group relative px-8 py-4 overflow-hidden rounded-full border-2 border-white text-white transition-all duration-300 hover:scale-105">
                <span className="relative z-10">Join Beta Program</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 px-4 bg-gradient-to-b from-black via-purple-900/20 to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Quantum Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-transparent backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full w-fit mb-6 group-hover:scale-110 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm transition-opacity"></div>
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="relative bg-gradient-to-br from-purple-900 to-black rounded-2xl max-w-lg w-full p-8 transform transition-all border border-purple-500/20">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <IoClose size={24} />
              </button>
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Join the Quantum Revolution</h3>
              <p className="text-gray-300 mb-6">Be part of the next technological leap. Our quantum-ready solutions are designed to transform industries and redefine possibilities.</p>
              <button
                onClick={() => setShowModal(false)}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
              >
                Get Early Access
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIMLHero;