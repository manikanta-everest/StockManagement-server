
import express from "express";
import { createStock, deleteStock, getStock } from "../../controller/StockController/StockController";
const router = express.Router();

router.post("/", createStock);
router.get("/", getStock)
router.delete("/:id",deleteStock)
export default router;
