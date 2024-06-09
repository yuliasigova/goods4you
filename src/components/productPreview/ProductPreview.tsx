import product from '../../shared/assets/img/product.jpg'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { IconButton } from '../../ui/IconButton/IconButton';
import style from './preview.module.scss'
import { Count } from '../count/Count';
import { useNavigate } from 'react-router-dom';
import CartIcon  from '../../shared/assets/svg/cart.svg?react'

export const ProductPreview = () => {
    const id = 1;
    const [isCart, setIsCart] = useState(false)
    const navigate = useNavigate()

    const handleButtonClick = () => {
        setIsCart(!isCart)
    }

    return (
        <article className={style.preview}>
            <Link to={`product/${id}`}>
            <img src={product} width={370} height={293} alt={'изображение товара'}></img>
            </Link>

           <div className={style.wrapper}>
           <div className={style.info}>
            <h3 onClick={() => navigate(`product/${id}`)}>
            Essence Mascara Lash Princess
            </h3>
            <p onClick={() => navigate(`product/${id}`)}>110 $ </p>
            </div>

            {isCart ? <Count/> : 
             <IconButton onClick={handleButtonClick}>
                <CartIcon/>
         </IconButton>}
           </div>
        </article>
    )
}