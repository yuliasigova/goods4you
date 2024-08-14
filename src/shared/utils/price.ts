export const discountPrice = (price:number, percent:number) => {
   const priceWithDiscount = price - ((price * percent)/100)
   return priceWithDiscount.toFixed(2)
}