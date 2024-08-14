import style from './button.module.scss'

interface Button  {
    children: React.ReactElement,
    onClick?: () => void,
}

export const IconButton = ({children, onClick}: Button) => {
    return (
        <button className={style.button}
        type={'button'}
        onClick={onClick}>
            {children}
        </button>
    )
}