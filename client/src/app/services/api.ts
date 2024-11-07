import {createApi, fetchBaseQuery, retry} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    // todo: to env
    baseUrl: 'http://localhost:8000/api',
    prepareHeaders: (headers, {getState}) => {

    }
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 2});

export const api = createApi({
    reducerPath: 'splitApi',
    baseQuery: baseQueryWithRetry,
    refetchOnMountOrArgChange: true,
    endpoints: () => ({}),
})
