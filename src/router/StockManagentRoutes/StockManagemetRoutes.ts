
import express from "express";
import { createStock, deleteStock, getStock, getStockItemById, updateStockItem } from "../../controller/StockController/StockController";
const router = express.Router();

router.post("/", createStock);
router.get("/", getStock)
router.delete("/:id",deleteStock)
router.get("/:id",getStockItemById)
router.patch("/:id",updateStockItem)
export default router;
