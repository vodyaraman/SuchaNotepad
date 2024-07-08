import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const groupApi = createApi({
    reducerPath: 'groupApi',
    baseQuery: fetchBaseQuery({baseUrl: `http://${process.env.HOST}:${process.env.PORT}/`}),
    endpoints: (build) => ({
        getGroupList: build.query({
            query: () => `groups/`,
        })
    })
});

export const { useGetGroupListQuery } = groupApi;