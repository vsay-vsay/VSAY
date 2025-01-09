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
    {
      id: 2,
      title: "Network Security Guide",
      description: "Comprehensive guide to securing your network infrastructure.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
      link: "#"
    },
    {
      id: 3,
      title: "Data Protection Strategies",
      description: "Advanced strategies for protecting sensitive data.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      link: "#"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Incident reported:", incidentData);
    setIncidentData({ title: "", description: "", severity: "low" });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Overview Card */}
      <div className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <FaShieldAlt className="text-blue-600 text-4xl mr-4" />
            <h1 className="text-3xl font-bold text-gray-800">Cybersecurity Center</h1>
          </div>
          <div className="flex space-x-4">
            <FaSearch className="text-gray-500 text-2xl" />
            <FaLock className="text-gray-500 text-2xl" />
          </div>
        </div>
        <p className="text-gray-600 text-lg">Comprehensive security solutions to protect your digital assets and maintain data integrity.</p>
      </div>

      {/* Vulnerability Assessment */}
      <div className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <FaExclamationTriangle className="text-yellow-500 text-3xl mr-4" />
          <h2 className="text-2xl font-bold text-gray-800">Vulnerability Assessment</h2>
        </div>
        <p className="text-gray-600 mb-6">Identify and analyze potential security risks in your system.</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center">
          <FaChartBar className="mr-2" />
          Start Assessment
        </button>
      </div>

      {/* Incident Reporting Form */}
      <div className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <FaExclamationTriangle className="text-red-500 text-3xl mr-4" />
          <h2 className="text-2xl font-bold text-gray-800">Report an Incident</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="title">Incident Title</label>
            <input
              type="text"
              id="title"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={incidentData.title}
              onChange={(e) => setIncidentData({ ...incidentData, title: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="description">Description</label>
            <textarea
              id="description"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32"
              value={incidentData.description}
              onChange={(e) => setIncidentData({ ...incidentData, description: e.target.value })}
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Severity Level</label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={incidentData.severity}
              onChange={(e) => setIncidentData({ ...incidentData, severity: e.target.value })}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition duration-300">
            Submit Report
          </button>
        </form>
      </div>

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
                  e.target.src = "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5";
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <a
                  href={resource.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 transition duration-300"
                >
                  <span>Read More</span>
                  <FaDownload className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CyberSecurityApp;