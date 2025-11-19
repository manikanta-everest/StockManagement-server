
import { db } from "../../database/firebase";
import { Product, ProductBody } from "../../types/types";
const STOCK_COLLECTION = "stock";

export const createStockItem = async (data: ProductBody): Promise<Product> => {
    const stockRef = db.collection(STOCK_COLLECTION).doc()
    const newstock = data;

    await stockRef.set(newstock);
    return { id: stockRef.id, ...newstock };
};