import dbConnection from "./db/db.js";
import Module from "./models/modulesSchema.js";
import dotenv from "dotenv"
import ModuleJSON from "./modules.json" assert { type: "json" };

dotenv.config()
const start = async() =>{
    try{
        await dbConnection(process.env.MONGO_URI)
        // await Module.deleteMany({});
        // await Module.create(ModuleJSON);
        console.log("Success")
    } catch(error){
        console.log(error)
    }
}

export default start;