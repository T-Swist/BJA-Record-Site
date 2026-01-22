import { baseApi } from './baseApi';

interface SocialLinks {
  spotify?: string;
  appleMusic?: string;
  instagram?: string;
  twitter?: string;
  youtube?: string;
  [key: string]: string | undefined;
}

interface Project {
  id: string;
  title: string;
  description?: string;
  releaseDate?: string;
  coverUrl?: string;
  type: string;
  isPublished: boolean;
}

interface Artist {
  id: string;
  name: string;
  bio?: string;
  genre?: string;
  imageUrl?: string;
  socialLinks?: SocialLinks;
  projects?: Project[];
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
