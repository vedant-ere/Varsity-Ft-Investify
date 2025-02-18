// file path: C:\Users\vedan\OneDrive\Documents\Varsity-Ft-Investify\backend\controllers\getAllModules.js
import Module from "../models/modulesSchema.js";

const getAllModules = async (req, res) => {
  const myData = await Module.find({}).sort({ moduleNumber: 1 });
  res.status(200).json({ message: "Get all modules", data: myData });
};
const getAllModulesTesting = async (req, res) => {
  res.status(201).json({ message: "Testing " });
};

export { getAllModules, getAllModulesTesting };
