// C:\Users\vedan\OneDrive\Documents\Varsity-Ft-Investify\frontend\components\SubModule.jsx

import React from 'react'
import { Link } from "react-router-dom";

const SubModule = ({subModule, index}) => {
  return (
   <>
      <div className="mt-4 mb-9">
          <Link className="text-2xl font-medium hover:text-blue-700">
            {subModule.subModuleNumber}. {subModule.subModuleHeading}
          </Link>
          <p className="mt-3">{subModule.subModuleDescription}</p>
      </div>
   </>
  )
}

export default SubModule
