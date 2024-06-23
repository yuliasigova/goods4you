import style from '../homePage/home.module.scss'
import { Button } from '../../atoms/Button/Button'
import { Catalog } from '../../components/catalog/Catalog'
import { Faq } from '../../components/faq/Faq'
import { useGetCartByUserQuery } from '../../shared/api/goodsApi'
import { useSelector } from 'react-redux'
import { selectUser } from '../../shared/slice/UserSlice'
import { skipToken } from '@reduxjs/toolkit/query/react'

export const HomePage = () => {
    const userId = useSelector(selectUser)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {data:cart, isSuccess} = useGetCartByUserQuery(userId ?? skipToken)

    return (
        <main>
            <section className={style.description}>
                <div className={style.wrapper}>
                <h1 className={style.title}>  Any products from famous brands with worldwide delivery</h1>
            
            <p className={style.text}>We sell smartphones, laptops, clothes, shoes and many other products at low prices</p>
            <Button type="button">Go to shopping</Button>
                </div>  
            </section>
           <Catalog/>
           <Faq/>
        </main>
    )
}