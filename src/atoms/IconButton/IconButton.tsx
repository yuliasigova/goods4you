import style from './IconButton.module.scss'
import cn from 'classnames'

interface Button  {
    primary?: boolean,
    aria: string
    children: React.ReactElement
    onClick?: () => void,
    disabled: boolean
}

export const IconButton = ({primary=true, aria, children, onClick, disabled}: Button) => {

    const buttonClass = cn({
        [style.iconButton]: primary,
        [style.iconButtonSecond]: !primary
    })
    
    return (
        <button className={buttonClass}
        type={'button'} aria-label={aria}
        onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}