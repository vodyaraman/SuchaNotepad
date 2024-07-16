import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { serverURL } from '../../../Pull/Consts';

export const noteApi = createApi({
    reducerPath: 'noteApi',
    tagTypes: ['Notes'],
    baseQuery: fetchBaseQuery({
        baseUrl: serverURL,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('authToken');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        }
    }),
    endpoints: (build) => ({
        getNotesList: build.query({
            query: () => `notes/getNotes`,
            providesTags: (result) =>
                result ? [...result.map(({ _id }) => ({ type: 'Notes', id: _id })), { type: 'Notes', id: 'LIST' }] : [{ type: 'Notes', id: 'LIST' }],
        }),
        createNote: build.mutation({
            query: (body) => ({
                url: '/notes/createNote',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Notes', id: 'LIST' }],
        }),
        updateNote: build.mutation({
            query: ({ id, ...body }) => ({
                url: `/notes/updateNote/${id}`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: [{ type: 'Notes', id: 'LIST' }],
        }),
        deleteNote: build.mutation({
            query: (id) => ({
                url: `/notes/deleteNote/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'Notes', id: 'LIST' }],
        }),
        getNoteById: build.query({
            query: (id) => `notes/getNote/${id}`,
            transformResponse: (response) => response.noteText,
            providesTags: (result) => [{ type: 'Notes', id: result?.id }],
          }),          
    })
});

export const { 
    useGetNotesListQuery, 
    useCreateNoteMutation, 
    useUpdateNoteMutation, 
    useDeleteNoteMutation, 
    useGetNoteByIdQuery 
} = noteApi;
