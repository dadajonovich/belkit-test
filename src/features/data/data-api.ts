import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SignUpArg, StatusData } from '../../types';
import { SignInArg } from '../../types/SignInArg';

export const dataApi = createApi({
  reducerPath: '@@data',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://js-test.kitactive.ru' }),
  endpoints: (builder) => ({
    signUp: builder.mutation<StatusData, SignUpArg>({
      query: (body) => ({
        url: '/api/register',
        method: 'POST',
        body,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }),
    }),
    signIn: builder.mutation<StatusData, SignInArg>({
      query: (body) => ({
        url: '/api/login',
        method: 'POST',
        body,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation } = dataApi;
