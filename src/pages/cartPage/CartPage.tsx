import style from './cart.module.scss'
import { CartItem } from '../../components/cartItem/CartItem'
import { IProductDetails } from '../../shared/types/ProductTypes'
import { selectCart } from '../../shared/slice/CartSlice'
import { useSelector } from 'react-redux'

export const CartPage = () => {
    const cart = useSelector(selectCart)
    const products:Array<IProductDetails> = cart.products 

    return (
        <main className={style.cart}>
            <h1 className={style.title}>My cart</h1>
            <section className={style.wrapper}>

              {products && products.length ? 
              <>
                <ul className={style.list}>
                    {products?.map(item => 
                         <li key={item.id}> 
                         <CartItem product={item}/>
                     </li>
                    )}
                </ul> 
               
                <div className={style.total}>
                    <div className={style.count}>
                        <p>Total count:</p>
                        <span>{cart.totalQuantity}</span>
                    </div>
                    <div className={style.price}>
                        <p>Total price:</p>
                        <span>{cart.total.toFixed(2)}$</span>
                    </div>
                    <div className={style.discount}>
                        <p>Total price with discount:</p>
                        <span>{cart.discountedTotal}$</span>
                    </div> 
                </div>
                </> :
                 <p className={style.infoText}> Add items to your cart </p>}
            </section>
            </main>
    )
}