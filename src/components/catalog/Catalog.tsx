import { ProductPreview } from "../productPreview/ProductPreview"
import style from './catalog.module.scss'
import { Button } from "../../atoms/Button/Button"
import { SearchBar } from "../../molecules/SearchBar/SearchBar"
import { useGoodsListQuery } from "../../shared/api/goodsApi"
import { ChangeEvent } from "react"
import { useDebounce } from '../../shared/hooks/useDebounce'
import { IGoodsList } from "../../shared/types/ProductTypes"
import { useParams } from "../../shared/hooks/useParams"

const DEFAULT_LIMIT = 9;

export const Catalog = () => {
    const {skip, search, setSkip, setSearch} = useParams()
    const debouncedSearch = useDebounce(search, 1000);

    const param = {
        limit: DEFAULT_LIMIT,
        skip: skip,
        q: debouncedSearch
    }

    const {data:goods, isLoading, isError} = useGoodsListQuery(param)

    const totalGoods = goods?.total as IGoodsList['total']

   const changeSearch = (evt:ChangeEvent<HTMLInputElement>) => {
        setSearch(evt.target.value)
        setSkip(0)
   }

   const handleButtonClick = () => {
    setSearch(search)
   }
    
    const changeLimit = () => {
        if ((totalGoods - skip) <= DEFAULT_LIMIT) {
            return
        } else setSkip(skip + DEFAULT_LIMIT) 
    }


    if (isLoading) {
        return (
        <section className={style.catalog}>
        <h2 className={style.title}>Loading...</h2>
        </section>
        )
    }
   
    if (isError) {
        return (
            <section className={style.catalog}>
              <h2 className={style.text}>Something went wrong</h2>   
            </section>
       )
    }
    return (
        <section className={style.catalog} id={'catalog'}>
        <h2 className={style.title}> Catalog </h2>
        <SearchBar value={search} onClick={handleButtonClick} onChange={changeSearch}/>

        {totalGoods === 0 ?  <p className={style.text}>Product not found</p>
        : <ul className={style.list}>
            {goods?.products.map(item => 
                <li key={item.id}>
                <ProductPreview product={item}/>
            </li>
            )}
        </ul>}
        

       {(totalGoods - skip) <= DEFAULT_LIMIT ? <></> :<Button onClick={changeLimit} type={'button'}>Show more</Button>}
    
    </section>
    )
}