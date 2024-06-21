import { createSlice, isAnyOf} from "@reduxjs/toolkit";
import { ICartIInfo } from "../types/CartTypes";
import { goodsApi } from "../api/goodsApi";

const initialState = {
    carts: {} as ICartIInfo
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addMatcher(
            isAnyOf(goodsApi.endpoints.getCartByUser.matchFulfilled), 
            (state, {payload}) => {
                state.carts = payload.carts[0]
            }
          );
          builder.addMatcher(
            isAnyOf(goodsApi.endpoints.updateCart.matchFulfilled), 
            (state, {payload}) => {
               state.carts = payload
    });
    },
    selectors: {
        selectProduct: state => state.carts.products,
        selectTotal: state => state.carts.totalQuantity,
        selectCart: state => state.carts,
        selectCartId: state => state.carts.id
    },
})

export const {selectProduct, selectTotal, selectCart, selectCartId} = cartSlice.selectors

export default cartSlice.reducer
