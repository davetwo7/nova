import axios, { AxiosResponse } from 'axios';

interface Genre {
  genre?: string;
  name?: string;
}

interface GenreResponse {
  data: Genre[]
}

export const genreLoader = async (): Promise<GenreResponse> => {
  try {
    const results: AxiosResponse<GenreResponse> = await axios.get("http://localhost:3000/discover/map");
    console.log(results.data)
    return results.data;
  } catch (error) {
    console.log(error)
    throw Error
  }
}