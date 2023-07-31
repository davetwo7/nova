import axios, { AxiosResponse } from 'axios';

export const genreLoader = async (searchValue, searchType) => {
  try {
    const results = await axios.get(`http://localhost:3000/search?searchValue=${searchValue}&searchType=${searchType}`);
    console.log(results.data)
    return results.data;
  } catch (error) {
    console.log(error)
    throw Error
  }
}