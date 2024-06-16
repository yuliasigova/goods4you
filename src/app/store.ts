import { configureStore } from '@reduxjs/toolkit';
import { goodsApi } from '../shared/api/goodsApi';
import cartReducer from '../shared/slice/CartSlice'

export const store = configureStore({
    reducer: {
        [goodsApi.reducerPath]: goodsApi.reducer,
        cart: cartReducer
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(goodsApi.middleware)
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
