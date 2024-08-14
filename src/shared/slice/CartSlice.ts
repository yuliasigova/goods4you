import { createSlice, isAnyOf} from "@reduxjs/toolkit";
import { ICartIInfo } from "../types/CartTypes";
import { goodsApi } from "../api/goodsApi";

const initialState = {
    carts : {} as ICartIInfo,  
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            isAnyOf(goodsApi.endpoints.getCartByUser.matchFulfilled), 
            (state, action) => {
                state.carts = action.payload.carts[0]}
          );
    },
    selectors: {
        selectProduct: state => state.carts.products,
        selectTotal: state => state.carts.totalQuantity,
        selectCart: state => state.carts,
    },
})

// export const {} = cartSlice.actions

export const {selectProduct, selectTotal, selectCart} = cartSlice.selectors

export default cartSlice.reducer
