import style from './product.module.scss'
import { Slider } from '../../components/slider/Slider'
import { ProductDescription } from '../../components/productDescription/ProductDescription'

export const ProductPage = () => {
    return (
        <main className={style.product}>
            <p className={style.text}>Product 5</p>
            <section className={style.wrapper}>
            <Slider/>
            <ProductDescription/>
            </section>
        </main>
    )
}