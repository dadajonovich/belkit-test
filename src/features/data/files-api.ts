import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createHeaders } from '../../utils/createHeaders';
import { FileDto } from '../../types';

export const filesApi = createApi({
  reducerPath: '@@files',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://js-test.kitactive.ru' }),
  endpoints: (builder) => ({
    upload: builder.mutation<FileDto, FormData>({
      query: (body) => ({
        url: '/api/media/upload',
        method: 'POST',
        body,
        headers: createHeaders(true),
      }),
    }),
  }),
});

export const { useUploadMutation } = filesApi;
