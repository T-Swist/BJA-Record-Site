import { baseApi } from './baseApi';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  imageUrl?: string;
  imagePublicId?: string;
  attendees: number;
  status: 'upcoming' | 'ongoing' | 'completed';
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export const eventApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllEvents: builder.query<Event[], { status?: string }>({
      query: ({ status }) => ({
        url: '/events',
        params: status ? { status } : undefined
      }),
      providesTags: ['Admin']
    }),
    getEventById: builder.query<Event, string>({
      query: (id) => `/events/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Admin', id }]
    }),
    createEvent: builder.mutation<Event, Partial<Event>>({
      query: (data) => ({
        url: '/events',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Admin']
    }),
    updateEvent: builder.mutation<Event, { id: string; data: Partial<Event> }>({
      query: ({ id, data }) => ({
        url: `/events/${id}`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: 'Admin', id }]
    }),
    deleteEvent: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/events/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Admin']
    }),
    togglePublishEvent: builder.mutation<Event, string>({
      query: (id) => ({
        url: `/events/${id}/publish`,
        method: 'PATCH'
      }),
      invalidatesTags: (_result, _error, id) => [{ type: 'Admin', id }]
    })
  })
});

export const {
  useGetAllEventsQuery,
  useGetEventByIdQuery,
  useCreateEventMutation,
  useUpdateEventMutation,
  useDeleteEventMutation,
  useTogglePublishEventMutation
} = eventApi;
