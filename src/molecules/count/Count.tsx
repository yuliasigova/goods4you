import { IconButton } from '../../ui/IconButton/IconButton'
import style from './Count.module.scss'
import IconMinus  from '../../shared/assets/svg/minus.svg?react'
import IconPlus  from '../../shared/assets/svg/plus.svg?react'
import { useState } from 'react'

interface ICount  {
    primary?: boolean,
    quantity: number
}

export const Count = ({primary = true, quantity}: ICount) => {
    const mode = primary ? style.count : style.countLarge
    const [count, setCount] = useState(quantity)
    
    return (
        <div className={mode}>
            <IconButton aria ='Уменьшить значение' 
            onClick={() => setCount(count - 1)}>
                <IconMinus/>
            </IconButton>
            <span>{count}</span>
            <IconButton aria='Увеличить значение' onClick={() => setCount(count + 1)}>
            <IconPlus/>
            </IconButton>
        </div>
    )
}