import style from './description.module.scss';
import { Button } from '../../atoms/Button/Button';
import { IProductDetails } from '../../shared/types/ProductTypes';
import { discountPrice } from '../../shared/utils/price';
import { getRating } from '../../shared/utils/rating';
import { useQuantity } from '../../shared/hooks/useQuantity';
import { CountWrapper } from '../CountWrapper/CountWrapper';

type ProductDescriptionProp = {
  product: IProductDetails
}

export const ProductDescription = ({product}:ProductDescriptionProp) => {
  const {title, sku,  rating, price, discountPercentage,  stock, brand, category, description} = product
  const { addProduct} = useQuantity(product)

  const priceWithDiscount = discountPrice(price, discountPercentage)

  const handleButtonClick = async() => {
    await addProduct()
}
  return (
    <div className={style.description}>
        <div className={style.wrapper}>
            <h1>{title}</h1>
            <dl>
                <dt>SKU ID</dt>
                <dd>{sku}</dd>
            </dl>
        </div>

        <dl className={style.content}>
          <div className={style.info}>
            <dt>Rating</dt>
            <dd className={style.rating} style={{width: `${getRating(Math.round(rating))}px`}}></dd>
          </div>
          <div className={style.info}>
            <dt>Base price</dt>
            <dd>{price}$</dd>
          </div>
      
          <div className={style.info}>
            <dt>Discount percentage</dt>
            <dd>{discountPercentage}%</dd>
          </div>
        
          <div className={style.info}>
            <dt>Discount price</dt>
            <dd>{priceWithDiscount}$</dd>
          </div>

          <div className={style.info}>
            <dt>Stock</dt>
            <dd>{stock}</dd>
          </div>
         
          <div className={style.info}>
            <dt>Brand</dt>
            <dd>{brand}</dd>
          </div>

          <div className={style.info}>
            <dt>Category</dt>
            <dd>{category}</dd>
          </div>

          <div className={style.info}>
            <dt>Description</dt>
            <dd>{description}</dd>
          </div>
        </dl>

          <CountWrapper primary={false} product={product}>
          <Button onClick={handleButtonClick} type='button'>Add to cart</Button>
          </CountWrapper>
        
    </div>
  )
}