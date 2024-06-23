import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProductDetails } from '../types/ProductTypes';
import { IGoodsList } from '../types/ProductTypes';
import { ICartDetails } from '../types/CartTypes';
import { IParam } from '../types/ParamTypes';

export const API_URL = 'https://dummyjson.com/';

export const goodsApi = createApi({
    reducerPath: 'goodsApi',
    tagTypes: ['Products', 'Carts'],
    baseQuery: fetchBaseQuery({
        baseUrl: `${API_URL}`,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token')
            if (token) {
              headers.set('Authorization', `Bearer ${token}`)
            }  
            headers.set('Content-Type', 'application/json')
            return headers
          },
    }), 
    endpoints: build => ({
        goodsList: build.query<IGoodsList, IParam>({
            query: (param) => {
                const {skip, limit, q} = param
                return {
                    url: `products/search`,
                    params: {skip, limit, q}
                }
            },
            providesTags: ['Products']
        }),
        getProduct: build.query<IProductDetails, number>({
            query: (id) =>({
                url: `/products/${id}`
            }),
            providesTags: ['Products']
        }),
        getCartByUser: build.query<ICartDetails, number | null>({
            query: (id) =>({
                url: `/carts/user/${id}`
            }),
        }),
        updateCart: build.mutation({
            query: (body) => {
                const {id, data} = body
                return {
                    url: `carts/${id}`,
                    headers: {'Content-Type': 'application/json'},
                    method: 'PUT',
                    body: data,
                }
            },
        }),
    })
})


export const {useGoodsListQuery, useGetProductQuery, useGetCartByUserQuery, useUpdateCartMutation} = goodsApi