import { baseApi } from './baseApi';

interface Artist {
  id: string;
  name: string;
  bio?: string;
  genre?: string;
  imageUrl?: string;
  socialLinks?: any;
  projects?: any[];
  createdAt: string;
  updatedAt: string;
}

export const artistApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPublishedArtists: builder.query<{ artists: Artist[] }, void>({
      query: () => '/artists?published=true',
      providesTags: (result) =>
        result
          ? [
              ...result.artists.map(({ id }) => ({ type: 'Artist' as const, id })),
              { type: 'Artist', id: 'LIST' },
            ]
          : [{ type: 'Artist', id: 'LIST' }],
    }),
    getArtistById: builder.query<{ artist: Artist }, string>({
      query: (id) => `/artists/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Artist', id }],
    }),
  }),
});

export const {
  useGetPublishedArtistsQuery,
  useGetArtistByIdQuery,
} = artistApi;
