import style from './Input.module.scss'

export const Input = () => {
    return (
         <label className={style.input} aria-label="Введите значение для поиска">
        <input aria-label={"Введите значение для поиска"} type={'text'} name={'search'} placeholder="Search by title"/>
        </label>
    )
}