import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl, version,mode,role } from '../../config';
import Cookies from 'js-cookie';

const URL = `${baseUrl}${version}${mode}${role}`

const baseQuery = fetchBaseQuery({
  baseUrl: URL,
  prepareHeaders: (headers) => {
    const token = Cookies.get('token');
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['User'],
  endpoints: (builder) => ({}),
});
