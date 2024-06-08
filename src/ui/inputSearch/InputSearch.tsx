import { Button } from "../button/Button"
import style from './search.module.scss'

export const InputSearch = () => {
    return (
        <div className={style.search}>
         <label>
        <input type={'text'} placeholder="Search by title"/>
        </label>
        <Button>Search</Button>
        </div>
    )
}