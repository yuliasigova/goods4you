import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProductDetails } from '../types/ProductTypes';
import { IGoodsList } from '../types/ProductTypes';
import { ICartDetails } from '../types/CartTypes';
import { IParam } from '../types/ParamTypes';

export const API_URL = 'https://dummyjson.com';

export const goodsApi = createApi({
    reducerPath: 'goodsApi',
    tagTypes: ['Products', 'Carts'],
    baseQuery: fetchBaseQuery({
        baseUrl: `${API_URL}`,
    }), 
    endpoints: bilder => ({
        goodsList: bilder.query<IGoodsList, IParam>({
            query: (param) => {
                const {skip, limit, q} = param
                return {
                    url: `products/search`,
                    params: {skip, limit, q}
                }
            },
            providesTags: ['Products']
        }),
        getProduct: bilder.query<IProductDetails, number>({
            query: (id) =>({
                url: `/products/${id}`
            }),
            providesTags: ['Products']
        }),
        getCartByUser: bilder.query<ICartDetails, number>({
            query: (id) =>({
                url: `/carts/user/${id}`
            }),
            providesTags: ['Carts'],
            
        })
    })
})


export const {useGoodsListQuery, useGetProductQuery, useGetCartByUserQuery} = goodsApi