import { IconButton } from '../../atoms/IconButton/IconButton'
import style from './Count.module.scss'
import IconMinus  from '../../shared/assets/svg/minus.svg?react'
import IconPlus  from '../../shared/assets/svg/plus.svg?react'
import { useState, } from 'react'
import { useQuantity } from '../../shared/hooks/useQuantity'
import { IProductDetails } from '../../shared/types/ProductTypes'

interface ICount  {
    primary?: boolean,
    quantity: number,
    product: IProductDetails
}

export const Count = ({primary = true, quantity, product}: ICount) => {
    const mode = primary ? style.count : style.countLarge

    const [count, setCount] = useState(quantity)

   
    const {incrementProduct} = useQuantity(1, product)

    return (
        <div className={mode}>
            <IconButton aria ='Уменьшить значение' >
                <IconMinus/>
            </IconButton>
            <span>{quantity}</span>
            <IconButton aria='Увеличить значение' onClick={incrementProduct}>
            <IconPlus/>
            </IconButton>
        </div>
    )
}