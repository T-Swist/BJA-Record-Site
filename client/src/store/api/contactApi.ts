import { baseApi } from './baseApi';

interface Contact {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  createdAt: string;
  updatedAt: string;
}

export const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    submitContactForm: builder.mutation<{ message: string; contact: Contact }, Partial<Contact>>({
      query: (data) => ({
        url: '/contact',
        method: 'POST',
        body: data
      })
    }),
    getAllContacts: builder.query<Contact[], { status?: string }>({
      query: ({ status }) => ({
        url: '/contact',
        params: status ? { status } : undefined
      }),
      providesTags: ['Admin']
    }),
    getContactById: builder.query<Contact, string>({
      query: (id) => `/contact/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Admin', id }]
    }),
    updateContactStatus: builder.mutation<Contact, { id: string; status: string }>({
      query: ({ id, status }) => ({
        url: `/contact/${id}/status`,
        method: 'PATCH',
        body: { status }
      }),
      invalidatesTags: ['Admin']
    }),
    deleteContact: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/contact/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Admin']
    })
  })
});

export const {
  useSubmitContactFormMutation,
  useGetAllContactsQuery,
  useGetContactByIdQuery,
  useUpdateContactStatusMutation,
  useDeleteContactMutation
} = contactApi;
