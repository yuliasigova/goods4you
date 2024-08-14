import { Link } from 'react-router-dom'
import { IconButton } from '../../atoms/IconButton/IconButton'
import style from './preview.module.scss'
import { useNavigate } from 'react-router-dom';
import CartIcon  from '../../shared/assets/svg/cart.svg?react'
import { IProductDetails } from '../../shared/types/ProductTypes';
import { useQuantity } from '../../shared/hooks/useQuantity';
import { CountWrapper } from '../CountWrapper/CountWrapper';

type  ProductPreviewProps = {
    product: IProductDetails;
  }

export const ProductPreview = ({product}:ProductPreviewProps ) => {
    const {id, title, price, images} = product
    const {addProduct} = useQuantity(product)
    
    const navigate = useNavigate()
   
    const handleButtonClick = async() => {
         await addProduct() 
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
            <CountWrapper product={product} primary={true}>
                <IconButton aria={"Добавить товар в корзину"} onClick={handleButtonClick} disabled={false}>
                <CartIcon/>
         </IconButton>
         </CountWrapper>
           </div>
        </article>
    )
}