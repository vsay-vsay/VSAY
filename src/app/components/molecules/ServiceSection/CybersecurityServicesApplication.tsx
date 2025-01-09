import React, { useState } from "react";
import { FaShieldAlt, FaExclamationTriangle, FaBook, FaLock, FaChartBar, FaDownload, FaSearch } from "react-icons/fa";

const CyberSecurityApp = () => {
  const [incidentData, setIncidentData] = useState({
    title: "",
    description: "",
    severity: "low"
  });

  const resources = [
    {
      id: 1,
      title: "Cybersecurity Best Practices",
      description: "Learn essential cybersecurity practices to protect your digital assets.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
      link: "#"
    },
    // ... other resources
  ];

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Incident reported:", incidentData);
    setIncidentData({ title: "", description: "", severity: "low" });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* ... other components */}

      {/* Resources Section */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-8">
          <FaBook className="text-green-500 text-3xl mr-4" />
          <h2 className="text-2xl font-bold text-gray-800">Security Resources</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <div key={resource.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <img
                src={resource.image}
                alt={resource.title}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  // Cast e.target to HTMLImageElement to access 'src'
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5";
                }}
              />
              <div className="p-6">
                {/* ... other content */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CyberSecurityApp;