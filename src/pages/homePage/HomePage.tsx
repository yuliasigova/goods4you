import style from '../homePage/home.module.scss'
import { Button } from '../../atoms/Button/Button'
import { Catalog } from '../../components/catalog/Catalog'
import { Faq } from '../../components/faq/Faq'
import { useGetCartByUserQuery } from '../../shared/api/goodsApi'

export const HomePage = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {data:cart} = useGetCartByUserQuery(23)
    return (
        <main>
            <section className={style.description}>
                <div className={style.wrapper}>
                <h1 className={style.title}>  Any products from famous brands with worldwide delivery</h1>
            
            <p className={style.text}>We sell smartphones, laptops, clothes, shoes and many other products at low prices</p>
            <Button >Go to shopping</Button>
                </div>
          
                
            </section>
           <Catalog/>
           <Faq/>
        </main>
    )
}