import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from './goodsApi';
import { ILoginRequest, IUser } from '../types/UserTypes';
import { BaseQueryApi, FetchArgs } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  });


  const baseQueryWithReauth = async (args:string | FetchArgs, api: BaseQueryApi, extraOptions: object) => {
    const result = await baseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
      console.log('Token has expired or is invalid');
      localStorage.removeItem('token');
    }
  
    return result;
  };
 

  export const userApi = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
      login: builder.mutation<IUser, ILoginRequest>({
        query: (credentials) => ({
          url: 'auth/login',
          method: 'POST',
          body: credentials,
        }),
        transformResponse: (response:IUser) => {
          localStorage.setItem('token', response.token);
          return response;
        }
      }),
      getUser: builder.query<IUser, void>({
        query: () => `auth/me`,
      }),
    }),
  });


export const {useLoginMutation, useGetUserQuery} = userApi