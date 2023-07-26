import db from  '../../database/db.js'

export const getAllGenres = async () => {
  try {
    const response = await db.query("SELECT name FROM musicbrainz.genre")
    return response;
  } catch (error) {
    console.log(error)
    throw error;
  }
}

export const getGenre = () => {

}

export const getGenreById = () => {

}

export const getRelatedGenres = () => {

}

export const getGenreCriteria = () => {

}

export const getGenreArtists = () => {

}

export const getGenreAlbums = () => {

}

export const getGenreTracks = () => {

}

export const getTopGenres = (limit: string) => {

}

export const getTopGenreArtists = (limit: string) => {

}

export const getTopGenreTracks = (limit: string) => {

}

console.log(getAllGenres());