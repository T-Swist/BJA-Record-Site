import { baseApi } from './baseApi';

interface UploadedFile {
  url: string;
  publicId: string;
  format: string;
  width: number;
  height: number;
}

export const uploadApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    uploadSingle: builder.mutation<{ message: string; file: UploadedFile }, FormData>({
      query: (formData) => ({
        url: '/upload/single',
        method: 'POST',
        body: formData,
      }),
    }),
    uploadMultiple: builder.mutation<{ message: string; files: UploadedFile[] }, FormData>({
      query: (formData) => ({
        url: '/upload/multiple',
        method: 'POST',
        body: formData,
      }),
    }),
  }),
});

export const {
  useUploadSingleMutation,
  useUploadMultipleMutation,
} = uploadApi;
