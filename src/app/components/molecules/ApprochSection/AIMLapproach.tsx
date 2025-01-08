import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaRobot, FaBrain, FaDatabase } from "react-icons/fa";

interface Concept {
  id: number;
  title: string;
  icon: React.ReactElement;
  content: string;
  image: string;
}

const AIMLApproach: React.FC = () => {
  const [expandedPanel, setExpandedPanel] = useState<number | null>(null);

  const concepts: Concept[] = [
    {
      id: 1,
      title: "AI and ML Definition",
      icon: <FaRobot className="w-12 h-12 text-blue-500" />,
      content: "Artificial Intelligence (AI) is the simulation of human intelligence by machines. Machine Learning (ML) is a subset of AI that enables systems to learn and improve from experience without explicit programming.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
    },
    {
      id: 2,
      title: "Differences in Technologies",
      icon: <FaBrain className="w-12 h-12 text-purple-500" />,
      content: "While AI encompasses the broader concept of machines mimicking human intelligence, ML focuses on data and algorithms to improve accuracy. Deep Learning is a specialized subset of ML using neural networks with multiple layers.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    },
    {
      id: 3,
      title: "Industry Applications",
      icon: <FaDatabase className="w-12 h-12 text-green-500" />,
      content: "AI/ML technologies are revolutionizing various sectors including healthcare (diagnosis and treatment), finance (fraud detection), automotive (self-driving cars), and retail (personalized recommendations).",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    },
  ];

  const togglePanel = (panelId: number) => {
    setExpandedPanel(expandedPanel === panelId ? null : panelId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          AIML Approach
        </h2>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Discover how Artificial Intelligence and Machine Learning are transforming the technological landscape through innovative approaches and practical applications.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {concepts.map((concept) => (
          <div key={concept.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {concept.icon}
                  <h3 className="text-xl font-bold text-gray-900">
                    {concept.title}
                  </h3>
                </div>
                <button
                  onClick={() => togglePanel(concept.id)}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  {expandedPanel === concept.id ? (
                    <FaChevronUp className="w-5 h-5" />
                  ) : (
                    <FaChevronDown className="w-5 h-5" />
                  )}
                </button>
              </div>

              {expandedPanel === concept.id && (
                <div className="mt-4 space-y-4 transition-all duration-300">
                  <img
                    src={concept.image}
                    alt={concept.title}
                    className="w-full h-48 object-cover rounded-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1620712943543-bcc4688e7485";
                    }}
                  />
                  <p className="text-gray-600">{concept.content}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gray-50 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Visual Overview</h3>
        <div className="relative h-96">
          <img
            src="https://images.unsplash.com/photo-1501621667575-af81f1f0adcc"
            alt="AIML Overview"
            className="w-full h-full object-cover rounded-lg"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1620712943543-bcc4688e7485";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex items-end">
            <p className="text-white p-6 text-lg">
              A comprehensive visual representation of how AI, ML, and Deep Learning interconnect and evolve together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIMLApproach;
