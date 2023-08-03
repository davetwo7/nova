import axios, { AxiosResponse } from 'axios';

interface GenreAlbums {
  tag?: string;
  album?: string;
  artist?: string;
  mbid?: string;
}

export interface GenreAlbumsResponse {
  data: GenreAlbums[]
}

export const fetchGenreAlbums = async (genre: string): Promise<GenreAlbumsResponse> => {
  try {
    const results: AxiosResponse<GenreAlbumsResponse> = await axios.get(`http://localhost:3000/genre/${genre}`);
    console.log(results.data)
    return results.data;
  } catch (error) {
    console.log(error)
    throw Error
  }
}