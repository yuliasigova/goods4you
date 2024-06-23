import style from './Button.module.scss'

interface IButton  {
    primary?: boolean,
    children: string | React.ReactElement,
    type: 'button' | 'submit',
    disabled? :boolean,
    onClick?: () => void,
}

export const Button = (
    {primary = true, children, type = 'button', onClick, disabled=false}: IButton) => {

    const mode = primary ? style.button : style.secondButton
    return (
        <button className={mode} 
        onClick={onClick} type={type} disabled={disabled}>
            {children} 
        </button>
    )
}