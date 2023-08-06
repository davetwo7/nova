import axios, { AxiosResponse } from 'axios';

export const getNewestReleases = async () => {
  try {
    const results = await axios.get(`http://localhost:3000/`);
    console.log(results.data)
    return results.data;
  } catch (error) {
    console.log(error)
    throw Error
  }
}
