export interface IProductDetails {
  id: number ,
  title: string,
  sku: string,
  rating: number,
  price: number,
  discountPercentage: number,
  discountPrice: number,
  stock: number,
  brand: string,
  category: string,
  description: string,
  thumbnail: string,
  quantity: number,
  images: Array<string>
}

export interface IGoodsList {
  products: Array<IProductDetails>,
  total: number}