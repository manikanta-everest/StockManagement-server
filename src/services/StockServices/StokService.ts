
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

    return snapshot.docs.map((doc: any) => ({
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
export const getStockById = async (id: string) => {
    const snap = await getStockRef(id).get();
    if (!snap.exists) return undefined;

    return { id: snap.id, ...snap.data() } as Product;
}

export const updateStock = async (item: ProductBody, id: string): Promise<Product | undefined> => {
    await getStockRef(id).set(item, { merge: true });
    return getStockById(id);
};