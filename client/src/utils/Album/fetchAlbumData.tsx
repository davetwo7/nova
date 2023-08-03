import axios, { AxiosResponse } from 'axios';

export const fetchAlbumData = async (mbid: string) => {
  try {
    const results = await axios.get(`http://localhost:3000/album/${mbid}`);
    console.log(results);
    return results
  } catch (error) {
    console.log(error)
    throw Error
  }
}