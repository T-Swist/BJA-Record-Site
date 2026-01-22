import api from './api';

export const artistService = {
  async getAll() {
    const response = await api.get('/artists?published=true');
    return response.data.artists;
  },

  async getById(id: string) {
    const response = await api.get(`/artists/${id}`);
    return response.data.artist;
  }
};
