// C:\Users\vedan\OneDrive\Documents\Varsity-Ft-Investify\frontend\pages\SubModulePage.jsx

import React, { useEffect, useState } from "react";
import SubModule from "../components/SubModule";
import axios from "axios";
import { useParams } from "react-router-dom";

const ModulePage = () => {
  const [subModules, setSubModules] = useState([]);
  const [moduleData, setModuleData] = useState(null);
  const { modulenumber } = useParams(); 

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/modules") 
      .then((response) => {
        
        const module = response.data.data.find(
          (module) => module.moduleNumber.toString() === modulenumber
        );
        if (module) {
          setModuleData(module); 
          setSubModules(module.subModules); 
        }
      })
      .catch((error) => console.error("Error fetching module details:", error));
  }, [modulenumber]); 

  if (!moduleData) {
    return <div></div>; 
  }

  return (
    <div className="max-w-screen-lg mt-14 mx-auto px-4">
      <div className="flex">
        <span className="text-6xl font-bold">{moduleData.moduleNumber}</span>
        <div
          className={`border-t-4 border-emerald-400 ml-2 w-1/5 mt-12`}
        ></div>
      </div>
      <h1 className="text-4xl font-medium mt-4 mb-6">{moduleData.title}</h1>
      <div className="flex justify-between">
        {/* <a className="text-blue-600 cursor-pointer hover:text-gray-800">
          Download PDF
        </a> */}
      </div>
      <div className="border-b-1 w-full mt-4 mb-10 border-b-gray-200"></div>
      <div>
        {subModules.map((subModule, index) => (
          <SubModule key={index} subModule={subModule} />
        ))}
      </div>
    </div>
  );
};

export default ModulePage;
