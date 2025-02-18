import mongoose from "mongoose";
const { Schema } = mongoose;
const SubModuleSchema = new Schema({
  subModuleNumber: { type: Number, required: true },
  subModuleHeading: { type: String, required: true },
  subModuleDescription: { type: String, required: true },
  
});

const ModuleSchema = mongoose.Schema({
  title: { type: String, required: true },
  moduleNumber: { type: Number, required: true, unique: true },
  lineColor: { type: String, default: "border-gray-400" },
  chapters: { type: Number },
  description: { type: String },
  subModules: [SubModuleSchema],
});

export default mongoose.model("Module", ModuleSchema);
