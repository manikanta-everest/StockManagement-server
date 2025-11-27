
export type Category = "Electronics" | "PoojaStores" | "Cleaning" | "Fancy" | "Beauty" | "kitchen"

export type ProductBody = {
    name: string;
    price: number;
    category: Category;
    image: string;
    quantity: number;
}
export type Product = ProductBody & {
    id: string;
}