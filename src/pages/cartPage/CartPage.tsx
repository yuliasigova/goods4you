import style from './cart.module.scss'
import { CartItem } from '../../components/cartItem/CartItem'

export const CartPage = () => {
    return (
        <main className={style.cart}>
            <h1>My cart</h1>
            <section className={style.wrapper}>
                <ul className={style.list}>
                    <li> 
                        <CartItem/>
                    </li>
                    <li> 
                        <CartItem/>
                    </li>
                    <li> 
                        <CartItem/>
                    </li>
                </ul>
                <div className={style.total}>
                    <div className={style.count}>
                        <p>Total count:</p>
                        <span>3</span>
                    </div>
                    <div className={style.price}>
                        <p>Total price:</p>
                        <span>700$</span>
                    </div>
                    <div className={style.discount}>
                        <p>Total price with discount:</p>
                        <span>590$</span>
                    </div> 
                </div>
            </section>
            </main>
    )
}