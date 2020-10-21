export const GET_PRODUCTS = "GET_PRODUCTS";



export type Product = {
    _id: string;
    name: string;
    description: string;
    categories: string[];
    variants: string[];
    sizes: number[];
    img: string;
    price: number;
};

export type GetProductsAction = {
    type: typeof GET_PRODUCTS;
    payload: {
        products: Product[];
    };
};

/* export type ProductActions = {
    GetProductsAction
} */
