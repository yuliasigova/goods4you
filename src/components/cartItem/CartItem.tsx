import product from '../../shared/assets/img/product.jpg'
import { Link } from 'react-router-dom'
import { Count } from '../count/Count';
import style from './cartItem.module.scss'

export const CartItem = () => {
    const id = 1;
  
    return (
        <article className={style.cartItem}>
            <div className={style.wrapper}>
            <Link to={`/product/${id}`}>
            <img src={product} width={100} height={57} 
            alt={'изображение товара'}></img>
             </Link>
              <div>
                <h3>
                    Essence Mascara Lash Princess
                </h3>
                <p>110 $ </p>
            </div> 
            </div>
            <Count/>
            <button className={style.button}>Delete</button>
        </article>
    )
}