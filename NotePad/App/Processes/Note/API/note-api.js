import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const noteApi = createApi({
    reducerPath: 'noteApi',
    tagTypes: ['Notes'],
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
        getNotesList: build.query({
            query: () => `notes/`,
            providesTags: [{ type: 'Notes', id: 'LIST' }],
        }),
        createNote: build.mutation({
            query: (body) => ({
                url: '/notes/createNote',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Notes', id: 'LIST' }],
        }),
    })
});

export const { useGetNotesListQuery, useCreateNoteMutation } = noteApi;
