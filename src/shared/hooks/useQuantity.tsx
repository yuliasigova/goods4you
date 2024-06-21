import { useSelector } from "react-redux"
import { selectProduct,selectCartId  } from "../slice/CartSlice"
import { useState } from "react"
import { useUpdateCartMutation } from "../api/goodsApi"
import { IProductDetails } from "../types/ProductTypes"


//TODO
export const useQuantity = (id:number, product:IProductDetails) => {
    // const [count, setCount] = useState(quantity)
    const products = useSelector(selectProduct)
    const cartId = useSelector(selectCartId)
    const [updateCart, {data}] = useUpdateCartMutation()
    
    let isVisual = products?.some(p => p.id === id)
    const value = products?.find(p => p.id === id)?.quantity

    const addProduct = async() => {
           await updateCart({ id: cartId, data: {merge: false, products: [...products, product]}});
    }

    const incrementProduct = async() => {
        const productInCart = products.find((p) => p.id === product.id);
        const stock = product.stock

        if (productInCart?.quantity  === stock) {
            return
        } else {
            const newQuantity = productInCart?.quantity + 1;
            const updatedProducts = [...products, {id: productInCart?.id, quantity:newQuantity}];
            await updateCart({ id: 8, data: { products: updatedProducts, merge: true } });
        }
    }

    const deleteProduct = async() => {
            
            const filtered = products.filter(p => p.id !== product.id)
            await updateCart({ id: 8, data: {merge: false, products: [...filtered]}});
        }
    


    return {isVisual, value, addProduct , incrementProduct, deleteProduct}
}