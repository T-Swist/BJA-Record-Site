import { baseApi } from './baseApi';

interface Newsletter {
  id: string;
  email: string;
  isActive: boolean;
  subscribedAt: string;
  updatedAt: string;
}

interface SubscriberStats {
  total: number;
  active: number;
  inactive: number;
}

export const newsletterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    subscribeToNewsletter: builder.mutation<{ message: string; subscriber: Newsletter }, { email: string }>({
      query: (data) => ({
        url: '/newsletter/subscribe',
        method: 'POST',
        body: data
      })
    }),
    unsubscribeFromNewsletter: builder.mutation<{ message: string }, { email: string }>({
      query: (data) => ({
        url: '/newsletter/unsubscribe',
        method: 'POST',
        body: data
      })
    }),
    getAllSubscribers: builder.query<Newsletter[], { isActive?: boolean }>({
      query: ({ isActive }) => ({
        url: '/newsletter',
        params: isActive !== undefined ? { isActive } : undefined
      }),
      providesTags: ['Admin']
    }),
    getSubscriberStats: builder.query<SubscriberStats, void>({
      query: () => '/newsletter/stats',
      providesTags: ['Admin']
    }),
    deleteSubscriber: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/newsletter/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Admin']
    })
  })
});

export const {
  useSubscribeToNewsletterMutation,
  useUnsubscribeFromNewsletterMutation,
  useGetAllSubscribersQuery,
  useGetSubscriberStatsQuery,
  useDeleteSubscriberMutation
} = newsletterApi;
