import { NextFunction } from "express";
import { Request, Response } from "express";
import * as StockService from '../../services/StockServices/StokService'
export async function createStock(req: Request, res: Response, next: NextFunction) {
    const stockDetails = req.body;
    try {
        const newStock = await StockService.createStockItem(stockDetails)
        res.status(201).json(newStock);
    } catch (error) {
        next(error);
    }
}

export async function getStock(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const stockItems = await StockService.getStockItems();
        res.status(200).json(stockItems);
    } catch (error) {
        next(error);
    }
}
export async function deleteStock(req: Request, res: Response, next: NextFunction) {
    const itemId = req.params.id;
    try {
        await StockService.deleteStockItem(itemId)
        res.status(200).send()
    } catch (error) {
        next(error);
    }
}
export const getStockItemById = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const { id } = req.params;
    const item= await StockService.getStockById(id);
    return res.status(200).send(item);
  } catch (error) {
    console.error("Error fetching stock item:", error);
   next(error)
  }
};