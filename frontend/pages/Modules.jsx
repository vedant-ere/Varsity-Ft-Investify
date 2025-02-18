// C:\Users\vedan\OneDrive\Documents\Varsity-Ft-Investify\frontend\pages\Modules.jsx

import React, { useEffect, useState } from "react";
import ModuleCard from "../components/ModuleCard";
import axios from "axios";

//* Instead of this we have to actually fetch data from api and then do the same

const Modules = () => {
  const [modules, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/modules")
      .then((response) => setData(response.data.data)) 
      
      .catch((err) => console.error("Error fetching modules:", err));
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <h1 className="font-inter font-bold text-5xl mb-16 mt-10">Modules</h1>
      <div className="grid grid-cols-3 gap-8">
        {modules.map((module, index) => (
          <ModuleCard key={index} module={module} />
        ))}
      </div>
    </div>
  );
};

export default Modules;
