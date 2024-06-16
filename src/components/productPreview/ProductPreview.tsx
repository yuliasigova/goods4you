import { Link } from 'react-router-dom'
import { useState } from 'react';
import { IconButton } from '../../ui/IconButton/IconButton'
import style from './preview.module.scss'
import { Count } from '../../molecules/Count/Count';
import { useNavigate } from 'react-router-dom';
import CartIcon  from '../../shared/assets/svg/cart.svg?react'
import { IProductDetails } from '../../shared/types/ProductTypes';
import { useQuantity } from '../../shared/hooks/useQuantity';

type  ProductPreviewProps = {
    product: IProductDetails;
  }

export const ProductPreview = ({product}:ProductPreviewProps ) => {
    const {id, title, price, images} = product
    const { isVisual, value} = useQuantity(id)
    const [isCart, setIsCart] = useState(isVisual)
    const [count, setCount] = useState(value)

   
    const navigate = useNavigate()
   
    const handleButtonClick = () => {
        setIsCart(!isCart)
        setCount(1)
    }

    return (
        <article className={style.preview}>
            <Link to={`product/${id}`}>
            <img src={images[0]} width={370} height={293} alt={'изображение товара'}></img>
            </Link>

           <div className={style.wrapper}>
           <div className={style.info}>
            <h3 onClick={() => navigate(`product/${id}`)}>
            {title}
            </h3>
            <p onClick={() => navigate(`product/${id}`)}>{price} $ </p>
            </div>

            {isCart ? <Count quantity = {count}/> : 
             <IconButton aria={"Добавить товар в корзину"} onClick={handleButtonClick}>
                <CartIcon/>
         </IconButton>}
           </div>
        </article>
    )
}