import style from './description.module.scss';
import { Button } from '../../atoms/Button/Button';
import { ProductDetails } from '../../shared/types/ProductDetails';


const initialState:ProductDetails = {
  name: 'Puma Force 1 Shadow',
  skuId: '0005',
  rating: 5,
  basePrice: 500,
  discount: 10,
  discountPrice: 450,
  stock: 13,
  brand: 'Puma',
  category: 'Smartphones',
  description: 'An apple mobile which is nothing like apple',

}

export const ProductDescription = () => {
  const {name, skuId,  basePrice, discount, discountPrice, stock, brand, category, description} = initialState
  return (
    <div className={style.description}>
        <div className={style.wrapper}>
            <h1>{name}</h1>
            <dl>
                <dt>SKU ID</dt>
                <dd>{skuId}</dd>
            </dl>
        </div>

        <dl className={style.content}>
          <div className={style.info}>
            <dt>Rating</dt>
            <dd className={style.rating}></dd>
          </div>
          <div className={style.info}>
            <dt>Base price</dt>
            <dd>{basePrice}$</dd>
          </div>
      
          <div className={style.info}>
            <dt>Discount percentage</dt>
            <dd>{discount}%</dd>
          </div>
        
          <div className={style.info}>
            <dt>Discount price</dt>
            <dd>{discountPrice}$</dd>
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
          <Button>Add to cart</Button>
    </div>
  )
}