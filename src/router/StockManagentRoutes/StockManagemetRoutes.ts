
import express from "express";
import { createStock, getStock } from "../../controller/StockController/StockController";
const router = express.Router();

router.post("/", createStock);
router.get("/", getStock)
export default router;
