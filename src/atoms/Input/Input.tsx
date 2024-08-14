import style from './Input.module.scss'
import { ChangeEvent } from 'react'

interface IInput {
    value: string,
    onChange: (evt:ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({value, onChange}: IInput) => {
    return (
         <label className={style.input} aria-label="Введите значение для поиска">
        <input aria-label={"Введите значение для поиска"} type={'text'} name={'search'} value={value} placeholder="Search by title" onChange={onChange}/>
        </label>
    )
}