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
        const menuItems = await StockService.getStockItems();
        res.status(200).json(menuItems);
    } catch (error) {
        next(error);
    }
}