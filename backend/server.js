// file path : C:\Users\vedan\OneDrive\Documents\Varsity-Ft-Investify\backend\server.js
// dTnwO34kjTlK8LPX => DB pass
import express, { urlencoded } from "express";
import dotenv from "dotenv";
import appRoute from "./routes/routes.js";
import dbConnection from "./db/db.js";
import start from "./moduleDB.js";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(
  cors({
    origin: "http://localhost:5173", // Allow frontend URL
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res)=>{
//     res.send("This is home Page Hello from backend");
// })
app.use("/api/modules", appRoute);

// dbConnection();
start();

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
