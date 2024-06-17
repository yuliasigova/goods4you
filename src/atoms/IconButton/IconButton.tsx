import style from './IconButton.module.scss'

interface Button  {
    primary?: boolean,
    aria: string
    children: React.ReactElement
    onClick?: () => void,
}

export const IconButton = ({primary=true, aria, children, onClick}: Button) => {
    const mode = primary ? style.iconButton : style.iconButtonSecond
    return (
        <button className={mode}
        type={'button'} aria-label={aria}
        onClick={onClick}>
            {children}
        </button>
    )
}