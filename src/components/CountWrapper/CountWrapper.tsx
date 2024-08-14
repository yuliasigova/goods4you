import { Count } from "../../molecules/Count/Count"
import { IProductDetails } from "../../shared/types/ProductTypes"
import { selectProduct } from "../../shared/slice/CartSlice"
import { useSelector } from "react-redux"

interface ICountWrapper {
    product: IProductDetails,
    children: React.ReactElement,
    primary: boolean
}

export const CountWrapper = ({product, children, primary}: ICountWrapper) => {
    const productsInCart = useSelector(selectProduct)

    const isInCart = product ? (productsInCart && productsInCart.some(p => p.id === product?.id)) : false;

    const count = productsInCart && productsInCart?.find(p => p.id === product?.id)?.quantity

    return (
        isInCart && count ?
             <Count quantity={count} product={product} primary={primary}/> : 
             children
      
    )
}