import { Button } from "../button/Button"
import style from './search.module.scss'

export const InputSearch = () => {
    return (
        <div className={style.search}>
         <label aria-label="Введите значение для поиска">
        <input aria-label={"Введите значение для поиска"} type={'text'} name={'search'}placeholder="Search by title"/>
        </label>
        <Button>Search</Button>
        </div>
    )
}