import { IconButton } from '../../ui/IconButton/IconButton'
import style from './Count.module.scss'
import IconMinus  from '../../shared/assets/svg/minus.svg?react'
import IconPlus  from '../../shared/assets/svg/plus.svg?react'

interface Count  {
    primary?: boolean,
}

export const Count = ({primary = true}) => {
    const mode = primary ? style.count : style.countLarge
    return (
        <div className={mode}>
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