
import express from "express";
import { createStock } from "../../controller/StockController/StockController";
const router = express.Router();

router.post("/", createStock);
export default router;
