import { IconButton } from '../../ui/IconButton/IconButton'
import style from './count.module.scss'
import IconMinus  from '../../shared/assets/svg/minus.svg?react'
import IconPlus  from '../../shared/assets/svg/plus.svg?react'

export const Count = () => {
    return (
        <div className={style.count}>
            <IconButton aria ='Уменьшить значение'>
                <IconMinus/>
            </IconButton>
            <span>1</span>
            <IconButton aria='Увеличить значение'>
            <IconPlus/>
            </IconButton>
        </div>
    )
}