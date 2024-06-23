import style from './Input.module.scss'
import { ChangeEvent } from 'react'

interface IInput {
    value: string,
    aria: string,
    placeholder: string,
    name: string,
    type: string
    onChange: (evt:ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({value, aria, placeholder, name, type, onChange}: IInput) => {
    return (
         <label className={style.input} 
         aria-label={aria}>
        <input aria-label={aria}
        type={type} name={name} value={value} placeholder={placeholder} onChange={onChange}/>
        </label>
    )
}