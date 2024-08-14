import { IconButton } from '../../atoms/IconButton/IconButton'
import style from './Count.module.scss'
import IconMinus  from '../../shared/assets/svg/minus.svg?react'
import IconPlus  from '../../shared/assets/svg/plus.svg?react'
import { useQuantity } from '../../shared/hooks/useQuantity'
import { IProductDetails } from '../../shared/types/ProductTypes'

interface ICount  {
    primary?: boolean,
    quantity: number,
    product: IProductDetails
}

export const Count = ({primary, quantity, product}: ICount) => {
    const mode = primary ? style.count : style.countLarge
    const {incrementProduct, decrementProduct, loading} = useQuantity(product)

    const disable = quantity === product.stock ? true : false

    return (
        <div className={mode}>
            <IconButton aria ='Уменьшить значение' onClick={decrementProduct} disabled={loading}>
                <IconMinus/>
            </IconButton>
            <span>{quantity}</span>
            <IconButton aria='Увеличить значение' onClick={incrementProduct} disabled={disable || loading}>
            <IconPlus/>
            </IconButton>
        </div>
    )
}