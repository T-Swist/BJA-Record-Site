import { baseApi } from './baseApi';

interface LoginCredentials {
  email: string;
  password: string;
}

interface Admin {
  id: string;
  email: string;
  name: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

interface AuthResponse {
  message: string;
  admin: Admin;
  token: string;
}

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginCredentials>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['Admin'],
    }),
    getProfile: builder.query<{ admin: Admin }, void>({
      query: () => '/auth/profile',
      providesTags: ['Admin'],
    }),
  }),
});

export const {
  useLoginMutation,
  useGetProfileQuery,
} = authApi;
