import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SignUpArg, StatusData } from '../../types';
import { SignInArg } from '../../types/SignInArg';
import { createHeaders } from '../../utils/createHeaders';

export const dataApi = createApi({
  reducerPath: '@@data',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://js-test.kitactive.ru' }),
  endpoints: (builder) => ({
    signUp: builder.mutation<StatusData, SignUpArg>({
      query: (body) => ({
        url: '/api/register',
        method: 'POST',
        body,
        headers: createHeaders(),
      }),
    }),
    signIn: builder.mutation<StatusData<{ token: string }>, SignInArg>({
      query: (body) => ({
        url: '/api/login',
        method: 'POST',
        body,
        headers: createHeaders(),
      }),
    }),
    signOut: builder.mutation<StatusData, void>({
      query: () => ({
        url: '/api/logout',
        method: 'POST',
        headers: createHeaders(),
      }),
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation, useSignOutMutation } =
  dataApi;
