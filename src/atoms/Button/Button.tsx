import style from './Button.module.scss'

interface Button  {
    primary?: boolean,
    children: string | React.ReactElement,
    onClick?: () => void,
}

export const Button = ({primary = true, children, onClick}: Button) => {

    const mode = primary ? style.button : style.secondButton
    return (
        <button className={mode} 
        onClick={onClick} type={'button'}>
            {children}
        </button>
    )
}