import { Button } from '../../atoms/Button/Button'
import style from './SearchBar.module.scss'
import { Input } from "../../atoms/Input/Input"
import { ChangeEvent} from 'react'


interface ISearchBar {
    value: string,
    onChange: (evt:ChangeEvent<HTMLInputElement>) => void,
    onClick: () => void
}

export const SearchBar = ({value, onChange, onClick}: ISearchBar) => {
   
    return (
        <div className={style.searchBar}>
        <Input  value={value} onChange={onChange}/>
        <Button onClick={onClick}> Search</Button>
        </div>
    )
}