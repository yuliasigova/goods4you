import { Button } from '../../atoms/Button/Button'
import style from './SearchBar.module.scss'
import { Input } from "../../atoms/Input/Input"

export const SearchBar = () => {
    return (
        <div className={style.searchBar}>
        <Input/>
        <Button>Search</Button>
        </div>
    )
}