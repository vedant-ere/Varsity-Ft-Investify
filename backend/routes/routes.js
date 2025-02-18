// file path C:\Users\vedan\OneDrive\Documents\Varsity-Ft-Investify\backend\routes\routes.js
import express from "express";
import { getAllModules, getAllModulesTesting } from "../controllers/getAllModules.js";
const router = express.Router();

router.get("/", getAllModules)

router.get("/testing", getAllModulesTesting)

export default router;