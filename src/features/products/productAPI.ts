import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Product } from '../../types/product'; 


interface ProductsApiResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
   
    getProducts: builder.query<Product[], void>({
      query: () => 'products',
      
      transformResponse: (response: ProductsApiResponse) => response.products,
    }),
  }),
});

export const { useGetProductsQuery } = productApi;