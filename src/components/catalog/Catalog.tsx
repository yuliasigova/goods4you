import { ProductPreview } from "../productPreview/ProductPreview"
import style from './catalog.module.scss'
import { Button } from "../../ui/button/Button"
import { InputSearch } from '../../ui/inputSearch/InputSearch'

export const Catalog = () => {
    return (
        <section className={style.catalog} id={'catalog'}>
        <h2 className={style.title}>
        Catalog
        </h2>
        <InputSearch/>
        <ul className={style.list}>
            <li>
                <ProductPreview/>
            </li>
            <li>
                <ProductPreview/>
            </li>
            <li>
                <ProductPreview/>
            </li>
            <li>
                <ProductPreview/>
            </li>
            <li>
                <ProductPreview/>
            </li>
            <li>
                <ProductPreview/>
            </li>
            <li>
                <ProductPreview/>
            </li>
            <li>
                <ProductPreview/>
            </li>
            <li>
                <ProductPreview/>
            </li>
        </ul>
        <Button>Show more</Button>
    </section>
    )
}