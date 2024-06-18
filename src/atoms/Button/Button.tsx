import style from './Button.module.scss'

interface IButton  {
    primary?: boolean,
    children: string | React.ReactElement,
    type: 'button' | 'submit',
    onClick?: () => void,
}

export const Button = (
    {primary = true, children, type = 'button', onClick}: IButton) => {

    const mode = primary ? style.button : style.secondButton
    return (
        <button className={mode} 
        onClick={onClick} type={type}>
            {children}
        </button>
    )
}