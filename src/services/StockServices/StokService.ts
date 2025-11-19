
import { db } from "../../database/firebase";
import { Product, ProductBody } from "../../types/types";
const STOCK_COLLECTION = "stock";

export const createStockItem = async (data: ProductBody): Promise<Product> => {
    const stockRef = db.collection(STOCK_COLLECTION).doc()
    const newstock = data;

    await stockRef.set(newstock);
    return { id: stockRef.id, ...newstock };
};

export const getStockItems = async () => {
    const snapshot = await db.collection(STOCK_COLLECTION).get();
        
    return snapshot.docs.map((doc:any)=> ({
        id: doc.id,
        ...doc.data(),
    }));
};
export const deleteStockItem = async (itemId: string): Promise<undefined> => {
    const stockRef = getStockRef(itemId);
    await stockRef.delete();
    return;
};
const getStockRef = (id: string) => {
    const stockRef = db.collection(STOCK_COLLECTION).doc(id);
    return stockRef;
}
