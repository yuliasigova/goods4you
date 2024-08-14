import { Link } from 'react-router-dom'
import { Count } from '../../molecules/Count/Count';
import style from './cartItem.module.scss'
import { useNavigate } from 'react-router-dom';
import { Button } from '../../atoms/Button/Button';
import { IProductDetails } from '../../shared/types/ProductTypes';

type CartItemProps = {
    product: IProductDetails;
  }

export const CartItem = ({product}: CartItemProps) => {
    const {title, thumbnail, price, quantity, id } = product
    const navigate = useNavigate()

    return (
        <article className={style.cartItem}>
            <div className={style.wrapper}>
            <Link to={`/product/${id}`}>
            <img src={thumbnail} width={100} height={57} 
            alt={'изображение товара'}></img>
             </Link>
              <div>
                <h2 onClick={() => navigate(`/product/${id}`)}>
                    {title}
                </h2>
                <p onClick={() => navigate(`/product/${id}`)}>{price} $ </p>
            </div> 
            </div>
            <Count quantity={quantity}/>
            <Button primary={false}>Delete</Button>
        </article>
    )
}