import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import apiClient from '../../../Pull/Utils/APIClient';

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