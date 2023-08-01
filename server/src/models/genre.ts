import db from  '../../database/db.js'

export const getAllGenres = async () => {
  try {
    const response = await db.query("SELECT name, gid, id FROM musicbrainz.genre")
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
  const genreQuery = `SELECT * FROM musicbrainz.release_group_tag
  JOIN musicbrainz.release_group ON musicbrainz.release_group.id = musicbrainz.release_group_tag.release_group
  JOIN musicbrainz.tag ON musicbrainz.tag.id = musicbrainz.release_group_tag.tag
  ORDER BY release_group ASC, tag ASC LIMIT 100`

}

export const getGenreTracks = () => {

}

export const getTopGenres = (limit: string) => {

}

export const getTopGenreArtists = (limit: string) => {

}

export const getTopGenreTracks = (limit: string) => {

}