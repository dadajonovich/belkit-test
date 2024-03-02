import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ResponceData, SignUpArg } from '../../types';
import { SignInArg } from '../../types/SignInArg';
import { createHeaders } from '../../utils/createHeaders';

export const authApi = createApi({
  reducerPath: '@@auth',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://js-test.kitactive.ru' }),
  endpoints: (builder) => ({
    signUp: builder.mutation<ResponceData, SignUpArg>({
      query: (body) => ({
        url: '/api/register',
        method: 'POST',
        body,
        headers: createHeaders(),
      }),
    }),
    signIn: builder.mutation<ResponceData<{ token: string }>, SignInArg>({
      query: (body) => ({
        url: '/api/login',
        method: 'POST',
        body,
        headers: createHeaders(),
      }),
    }),
    signOut: builder.mutation<ResponceData, void>({
      query: () => ({
        url: '/api/logout',
        method: 'POST',
        headers: createHeaders(),
      }),
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation, useSignOutMutation } =
  authApi;
