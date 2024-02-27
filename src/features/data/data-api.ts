import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SignUpArg, StatusData } from '../../types';

export const dataApi = createApi({
  reducerPath: '@@data',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://js-test.kitactive.ru' }),
  endpoints: (builder) => ({
    signUp: builder.mutation<StatusData, SignUpArg>({
      query: (body) => ({
        url: '/api/register',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useSignUpMutation } = dataApi;
