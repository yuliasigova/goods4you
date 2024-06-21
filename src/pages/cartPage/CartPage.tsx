import style from './cart.module.scss'
import { CartItem } from '../../components/cartItem/CartItem'
import { IProductDetails } from '../../shared/types/ProductTypes'
import { selectCart } from '../../shared/slice/CartSlice'
import { useSelector } from 'react-redux'
import { useGetCartByUserQuery } from '../../shared/api/goodsApi'

export const CartPage = () => {
    const cart = useSelector(selectCart)
    const products:Array<IProductDetails> = cart.products 

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {data, isLoading, isError} = useGetCartByUserQuery(23)


    if (isLoading) {
        return (
            <main className={style.cart}>
              <p className={style.title}>Loading...</p>   
            </main>
       )
    }

    if (isError) {
        return (
            <main className={style.cart}>
              <p className={style.title}>Something went wrong</p>   
            </main>
       )
    }
    return (
        <main className={style.cart}>
            <h1 className={style.title}>My cart</h1>
            <section className={style.wrapper}>

              { products.length >0 ? 
                <ul className={style.list}>
                    {products?.map(item => 
                         <li key={item.id}> 
                         <CartItem product={item}/>
                     </li>
                    )}
                </ul> : <p>Ничего не добавлено</p>}
                <div className={style.total}>
                    <div className={style.count}>
                        <p>Total count:</p>
                        <span>{cart.totalQuantity}</span>
                    </div>
                    <div className={style.price}>
                        <p>Total price:</p>
                        <span>{cart.total}$</span>
                    </div>
                    <div className={style.discount}>
                        <p>Total price with discount:</p>
                        <span>{cart.discountedTotal}$</span>
                    </div> 
                </div>
            </section>
            </main>
    )
}