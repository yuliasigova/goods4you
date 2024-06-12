import product from '../../shared/assets/img/product.jpg'
import { Link } from 'react-router-dom'
import { Count } from '../count/Count';
import style from './cartItem.module.scss'
import { useNavigate } from 'react-router-dom';
import { Button } from '../../atoms/Button/Button';

export const CartItem = () => {
    const id = 1;
    const navigate = useNavigate()

    return (
        <article className={style.cartItem}>
            <div className={style.wrapper}>
            <Link to={`/product/${id}`}>
            <img src={product} width={100} height={57} 
            alt={'изображение товара'}></img>
             </Link>
              <div>
                <h2 onClick={() => navigate(`/product/${id}`)}>
                    Essence Mascara Lash Princess
                </h2>
                <p onClick={() => navigate(`/product/${id}`)}>110 $ </p>
            </div> 
            </div>
            <Count/>
            <Button primary={false}>Delete</Button>
        </article>
    )
}