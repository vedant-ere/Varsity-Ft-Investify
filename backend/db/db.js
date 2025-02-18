
import mongoose from "mongoose";
const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "varsity-api"
        });
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
    }
};

export default dbConnection;