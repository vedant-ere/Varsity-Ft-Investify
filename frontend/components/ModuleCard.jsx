import React from "react";
import { useNavigate } from "react-router-dom";

const colorMap = {
  "border-blue-400": "border-blue-400",
  "border-green-400": "border-green-400",
  "border-red-400": "border-red-400",
  "border-yellow-400": "border-yellow-400",
};

const ModuleCard = ({ module }) => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (  
    <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm dark:shadow-gray-700/20 transition-colors duration-200">
      {/* Number and Line */}
      <div className="flex items-center mb-4">
        <span className="text-3xl font-bold dark:text-white">{module.moduleNumber}</span>
        <div className={`border-t-4 ${colorMap[module.lineColor] || "border-gray-400"} ml-2 w-full mt-2`}></div>
      </div>
      
      {/* Title (Clickable) */}
      <button 
        onClick={() => navigate(`/modules/${module.moduleNumber}`)}
        className="text-xl  cursor-pointer font-bold mb-2 hover:text-blue-500 dark:text-white dark:hover:text-blue-400 transition-colors duration-200"
      >
        {module.title}
      </button>

      {/* Chapters */}
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-2 transition-colors duration-200">{module.chapters} chapters</p>
      
      {/* Description */}
      <p className="text-gray-700 dark:text-gray-300 text-sm mt-2 transition-colors duration-200">{module.description}</p>

      {/* Actions */}
      <div className="mt-3 flex gap-4 text-blue-600 dark:text-blue-400 text-sm font-medium">
        <button onClick={() => navigate(`/modules/${module.moduleNumber}`)} className="hover:text-blue-600 cursor-pointer dark:hover:text-white transition-colors duration-200">
          View module
        </button>
        
      </div>
    </div>
  );
};

export default ModuleCard;