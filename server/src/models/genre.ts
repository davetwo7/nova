import db from '../../database/db.js'

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

export const getGenreAlbums = async (genreName: string) => {
  const genreQuery = `SELECT musicbrainz.tag.name as Tag,
  musicbrainz.release_group.name as Album,
  musicbrainz.artist_credit.name as Artist,
  musicbrainz.release_group.gid as mbid
  FROM musicbrainz.release_group_tag
  JOIN musicbrainz.release_group ON musicbrainz.release_group.id = musicbrainz.release_group_tag.release_group
  JOIN musicbrainz.artist_credit ON musicbrainz.release_group.artist_credit = musicbrainz.artist_credit.id
  JOIN musicbrainz.tag ON musicbrainz.tag.id = musicbrainz.release_group_tag.tag
  WHERE musicbrainz.tag.name = $1
  ORDER BY release_group ASC, tag ASC LIMIT 100`

  const result = await db.query(genreQuery, [genreName])
  return result;
}

export const getGenreTracks = () => {

}

export const getTopGenres = (limit: string) => {

}

export const getTopGenreArtists = (limit: string) => {

}

export const getTopGenreTracks = (limit: string) => {

}