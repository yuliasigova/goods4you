import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { goodsApi } from '../shared/api/goodsApi';
import cartReducer from '../shared/slice/CartSlice'
import { userApi } from '../shared/api/userApi';
import userReducer from '../shared/slice/UserSlice'

const rootReducer = combineReducers({
        [goodsApi.reducerPath]: goodsApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        cart: cartReducer,
        auth: userReducer
})
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(goodsApi.middleware, userApi.middleware)
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
