import { baseApi } from './baseApi';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  category: string;
  author: string;
  imageUrl?: string;
  imagePublicId?: string;
  readTime?: number;
  isPublished: boolean;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlogPosts: builder.query<BlogPost[], { category?: string }>({
      query: ({ category }) => ({
        url: '/blog',
        params: category ? { category } : undefined
      }),
      providesTags: ['Blog']
    }),
    getBlogPostById: builder.query<BlogPost, string>({
      query: (id) => `/blog/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Blog', id }]
    }),
    createBlogPost: builder.mutation<BlogPost, Partial<BlogPost>>({
      query: (data) => ({
        url: '/blog',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Blog', 'Admin']
    }),
    updateBlogPost: builder.mutation<BlogPost, { id: string; data: Partial<BlogPost> }>({
      query: ({ id, data }) => ({
        url: `/blog/${id}`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: 'Blog', id }, 'Admin']
    }),
    deleteBlogPost: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/blog/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Blog', 'Admin']
    }),
    togglePublishBlogPost: builder.mutation<BlogPost, string>({
      query: (id) => ({
        url: `/blog/${id}/publish`,
        method: 'PATCH'
      }),
      invalidatesTags: (_result, _error, id) => [{ type: 'Blog', id }, 'Admin']
    })
  })
});

export const {
  useGetAllBlogPostsQuery,
  useGetBlogPostByIdQuery,
  useCreateBlogPostMutation,
  useUpdateBlogPostMutation,
  useDeleteBlogPostMutation,
  useTogglePublishBlogPostMutation
} = blogApi;
