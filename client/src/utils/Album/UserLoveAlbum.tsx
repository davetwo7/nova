import axios, { AxiosResponse } from 'axios';

// interface GenreAlbums {
//   tag?: string;
//   album?: string;
//   artist?: string;
//   mbid?: string;
// }

// export interface GenreAlbumsResponse {
//   data: GenreAlbums[]
// }

export const userLoveAlbum = async (mbid: string, liked: boolean) => {
  try {
    const tempUserId = Math.floor(Math.random() * 20) + 1;
    const results = await axios.post(`http://localhost:3000/user/liked-albums/`, { userId: tempUserId, mbid: mbid, liked: liked });
    console.log(results);
    return results
  } catch (error) {
    console.log(error)
    throw Error
  }
}