import style from './product.module.scss'
import { Slider } from '../../components/slider/Slider'
import { ProductDescription } from '../../components/productDescription/ProductDescription'
import { useParams } from 'react-router-dom'
import { useGetProductQuery } from '../../shared/api/goodsApi'
import { IProductDetails } from '../../shared/types/ProductTypes'

export const ProductPage = () => {
    const {productId} = useParams()
    const id = Number(productId)
    const {data, isLoading, isError } = useGetProductQuery(id)
   
    if (isLoading) {
        return (
            <main className={style.product}>
              <p className={style.text}>Loading...</p>   
            </main>
       )
    }

    if (isError) {
        return (
            <main className={style.product}>
              <p className={style.text}>Product not found</p>   
            </main>
       )
    }
   
    return (
        <main className={style.product}>
        <p className={style.text}>Product {data?.id}</p>
        <section className={style.wrapper}>
        <Slider imageList={data?.images as []}/>
        <ProductDescription product={data as IProductDetails}/>
        </section>
    </main>
       
    )
}