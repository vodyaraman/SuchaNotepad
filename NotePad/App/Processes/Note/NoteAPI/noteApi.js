import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const noteApi = createApi({
    reducerPath: 'noteApi',
    tagTypes: ['Notes'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:10101'}),
    endpoints: build => ({
        createNote: build.mutation({
            query: (body) => ({
                url: '/notes/createNote',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{type: 'Notes', id: 'LIST'}],
        }),
    })
})

export const {useCreateNoteMutation} = noteApi;