import { IProductDetails } from "./ProductTypes"

export interface ICartIInfo {
    id?: number,
    products: Array<IProductDetails>,
    total: number,
    discountedTotal: number,
    userId: number | null,
    totalProducts?: number,
    totalQuantity: number
}

export interface ICartDetails  {
    carts: ICartIInfo,
    total?: number
}

