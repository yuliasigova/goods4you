import { useSelector } from "react-redux"
import { selectProduct,selectCartId  } from "../slice/CartSlice"
import { useUpdateCartMutation } from "../api/goodsApi"
import { IProductDetails } from "../types/ProductTypes"

export const useQuantity = (product:IProductDetails) => {
    const products = useSelector(selectProduct)
    const cartId = useSelector(selectCartId)
    const [updateCart, {isLoading}] = useUpdateCartMutation()
    const productInCart =  products && products?.find((p) => p.id === product?.id);
    const stock = product && product.stock
    const loading = isLoading;

    const addProduct = async() => {
           await updateCart({ id: cartId, data: {merge: false, products: [...products, product]}});
    }

    const incrementProduct = async() => {
        if (productInCart?.quantity  === stock) {
            return
        } else {
            const newQuantity = productInCart && productInCart?.quantity + 1;
            const updatedProducts = [...products, {id: productInCart?.id, quantity:newQuantity}];
            await updateCart({ id: cartId, data: { products: updatedProducts, merge: true } });
        }
    }

    const decrementProduct = async() => {
        if (productInCart?.quantity  === 1) {
           await  deleteProduct()
        } else {
            const newQuantity = productInCart && productInCart?.quantity - 1;
            const updatedProducts = [...products, {id: productInCart?.id, quantity:newQuantity}];
            await updateCart({ id: cartId, data: { products: updatedProducts, merge: true } });
        }
    }

    const deleteProduct = async() => {
        await updateCart({ id: cartId, data: {merge: false, products: [...products.filter(p => p.id !== product.id)]}});
    }
    


    return {addProduct , incrementProduct, deleteProduct, decrementProduct, loading}
}