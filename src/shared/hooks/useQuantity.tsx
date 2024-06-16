import { useSelector } from "react-redux"
import { selectProduct } from "../slice/CartSlice"

//TODO
export const useQuantity = (id:number) => {
    
    const products = useSelector(selectProduct)
    
    const isVisual = products?.some(p => p.id === id)
    const value = products?.filter(p => p.id === id)[0]?.quantity
    
    return {isVisual, value }
}