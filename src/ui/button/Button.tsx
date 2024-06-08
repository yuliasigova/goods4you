import style from './button.module.scss'

interface Button  {
    children: string | React.ReactElement,
    onClick?: () => void,
}

export const Button = ({children, onClick}: Button) => {
    return (
        <button className={style.button} 
        onClick={onClick}>
            {children}
        </button>
    )
}