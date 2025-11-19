
import express from "express";
import { createStock, deleteStock, getStock, getStockItemById } from "../../controller/StockController/StockController";
const router = express.Router();

router.post("/", createStock);
router.get("/", getStock)
router.delete("/:id",deleteStock)
router.get("/:id",getStockItemById)
export default router;
