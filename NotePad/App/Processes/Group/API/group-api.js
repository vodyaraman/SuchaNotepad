import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const groupApi = createApi({
    reducerPath: 'groupApi',
    tagTypes: ['Groups'],
    baseQuery: fetchBaseQuery({
        baseUrl: `http://${process.env.HOST}:${process.env.PORT}/`,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('authToken');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (build) => ({
        getGroupList: build.query({
            query: () => ({url: 'groups/',}),
            providesTags: (result) => result
            ? [
                ...result.map(({ id }) => ({type: 'Groups', id})),
                {type: 'Groups', id: 'LIST'},
            ]
            : [{type: 'Groups', id: 'LIST'},]
        }),
        addGroup: build.mutation({
            query: (body) => ({
                url: 'groups/create',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{type: 'Groups', id: 'LIST'}]
        })
    })
});

export const { useGetGroupListQuery, useAddGroupMutation } = groupApi;