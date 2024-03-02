import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createHeaders } from '../../utils/createHeaders';
import { FileDto, ResponceData } from '../../types';

export const filesApi = createApi({
  reducerPath: '@@files',

  baseQuery: fetchBaseQuery({ baseUrl: 'https://js-test.kitactive.ru' }),
  tagTypes: ['File'],
  endpoints: (builder) => ({
    upload: builder.mutation<ResponceData, FormData>({
      query: (body) => ({
        url: '/api/media/upload',
        method: 'POST',
        body,
        headers: createHeaders({ isFormData: true }),
      }),
      invalidatesTags: ['File'],
    }),
    getFiles: builder.query<ResponceData<{ files: FileDto[] }>, void>({
      query: () => ({
        url: '/api/media',
        method: 'GET',
        headers: createHeaders(),
      }),
      providesTags: ['File'],
    }),
    getFile: builder.query<string, string>({
      query: (id) => ({
        url: `/api/media/${id}`,
        method: 'GET',
        headers: createHeaders({ responceFile: true }),
        responseHandler: async (response) =>
          URL.createObjectURL(await response.blob()),
      }),
    }),
    deleteFile: builder.mutation<ResponceData, string>({
      query: (id) => ({
        url: `/api/media/${id}`,
        method: 'DELETE',
        headers: createHeaders(),
      }),
      invalidatesTags: ['File'],
    }),
  }),
});

export const {
  useUploadMutation,
  useGetFilesQuery,
  useGetFileQuery,
  useDeleteFileMutation,
} = filesApi;
