import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import ICardProps from '../interfaces/ICardProps';
import ICardListResponse from 'interfaces/ICardListResponse';

export const fetchApi = createApi({
  reducerPath: 'cardApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    getCardsByName: builder.query<ICardListResponse, { name: string; page: number }>({
      query: ({ name, page }) => `character/?page=${page}&name=${name}`,
    }),
    getCardById: builder.query<ICardProps, string>({
      query: (id) => `character/${id}`,
    }),
  }),
});
export const { useGetCardsByNameQuery, useGetCardByIdQuery } = fetchApi;
