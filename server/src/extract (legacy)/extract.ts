// import axios, { AxiosResponse } from "axios"

// // LFM API: https://www.last.fm/api/

// const url_root = "http://ws.audioscrobbler.com/2.0/";

// interface Tag {
//   tag: {
//     name: string,
//     url: string,
//     reach: string,
//     taggings: string,
//     streamable: string,
//     wiki: {}
//   }
// }

// interface TopTagsResponse {
//   tags: {
//     '@attr': {
//       offset: number;
//       num_res: number;
//       total: number;
//     },
//     tag: Tag[]
//   }
// }

// export const fetchTopTags = async (limit: number): Promise<Tag[]> => {
//   try {
//     const response: AxiosResponse<TopTagsResponse> = await axios.get(`${url_root}?method=chart.gettoptags&api_key=${process.env.LFM_API_KEY}&format=json&limit=${limit}`)
//     console.log(response.data.tags.tag)
//     return response.data.tags.tag;
//   } catch (error) {
//     console.log(`Error fetching data: ${error}`)
//     return [];
//   }
// }
