import React from "react";
import { FaChartLine, FaChartBar, FaDatabase, FaCog } from "react-icons/fa";

const DataAnalysisApproach = () => {
  const approaches = [
    {
      icon: <FaChartLine className="text-4xl text-blue-400" />,
      title: "Data Exploration & Visualization",
      description:
        "We uncover hidden patterns and trends through interactive visualizations and data exploration techniques.",
    },
    {
      icon: <FaChartBar className="text-4xl text-blue-400" />,
      title: "Advanced Analytics & Modeling",
      description:
        "Leveraging statistical analysis, machine learning, and data mining to extract valuable insights from your data.",
    },
    {
      icon: <FaDatabase className="text-4xl text-blue-400" />,
      title: "Data Cleaning & Transformation",
      description:
        "Ensuring data quality by meticulously cleaning, preparing, and transforming data for optimal analysis.",
    },
    {
      icon: <FaCog className="text-4xl text-blue-400" />,
      title: "Customizable Solutions",
      description:
        "We tailor our approach to your specific needs, ensuring data analysis aligns with your business goals.",
    },
  ];

  return (
    <section className="bg-[url('https://images.unsplash.com/photo-1504384110426-9b5dbafa19a3')] bg-cover bg-center bg-fixed py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white bg-opacity-80 p-8 rounded-xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-400 mb-4">
            Our Data Analysis Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming Your Data into Actionable Insights
          </p>
        </div>

        <div className="space-y-12">
          {approaches.map((approach, index) => (
            <div
              key={index}
              className="flex items-center space-x-8 p-6 hover:bg-gray-100 rounded-lg transition-all duration-300 bg-gray-50"
            >
              <div className="flex-shrink-0">
                {approach.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">
                  {approach.title}
                </h3>
                <p className="text-gray-600">
                  {approach.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={() => console.log("Learn More clicked")}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default DataAnalysisApproach;