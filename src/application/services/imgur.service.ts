import { HttpService } from "./http.service.ts";

const IMGUR_BASE_ENDPOINT = 'https://api.imgur.com/3';
const API_ID = process.env.VITE_API_ID;

export const ImgurService = {
  async searchByAlbum(searchTerm: string): Promise<Response> {
    const url = `${IMGUR_BASE_ENDPOINT}/gallery/search`;
    const params = {
      q: searchTerm,
      window: 'all',
      q_type: 'album'
    };
    const headers = { 'Authorization': `Client-ID ${API_ID}` };

    try {
      const res = await HttpService.get(url, { headers, params });
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }
}
