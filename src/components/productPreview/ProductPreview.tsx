import product from '../../shared/assets/img/product.jpg'
import { Link } from 'react-router-dom'
import { Icon } from '../../ui/icon/Icon';
import { useState } from 'react';
import { IconButton } from '../../ui/IconButton/IconButton';
import style from './preview.module.scss'
import { Count } from '../count/Count';


export const ProductPreview = () => {
    const id = 1;
    const [isCart, setIsCart] = useState(false)

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
            <h3>
            Essence Mascara Lash Princess
            </h3>
            <p>110 $ </p>
            </div>

            {isCart ? <Count/> : 
             <IconButton onClick={handleButtonClick}>
             <Icon name={'cart'} width={24} height={22} ></Icon>
         </IconButton>}
           </div>
            
           
            
          
        </article>
    )
}