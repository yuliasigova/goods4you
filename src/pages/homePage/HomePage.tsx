import style from '../homePage/home.module.scss'
import { Button } from "../../ui/button/Button"
import { Catalog } from '../../components/catalog/Catalog'
import { Faq } from '../../components/faq/Faq'

export const HomePage = () => {
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