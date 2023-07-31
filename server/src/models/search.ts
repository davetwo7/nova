import db from  '../../database/db.js'

const searchArtists = async (searchValue: string) => {
  const artistQuery = `SELECT artist_id, ref_count, artist_name, tag_name FROM (
    SELECT
      musicbrainz.artist_tag.artist AS artist_id,
      musicbrainz.artist_tag.tag AS tag_id,
      musicbrainz.tag.ref_count AS ref_count,
      musicbrainz.artist.name AS artist_name,
      musicbrainz.tag.name AS tag_name,
      ROW_NUMBER() OVER (
        PARTITION BY musicbrainz.artist_tag.artist
        ORDER BY ref_count DESC
      ) row_number
    FROM musicbrainz.artist_tag
    JOIN musicbrainz.tag ON musicbrainz.tag.id = musicbrainz.artist_tag.tag
    JOIN musicbrainz.artist ON musicbrainz.artist.id = musicbrainz.artist_tag.artist
    WHERE musicbrainz.artist.name ILIKE $1
  ) t
  WHERE row_number <= 5
  ORDER BY
    CASE
      WHEN artist_name = $2 THEN 0
      ELSE 1
    END, ref_count DESC`
  const results = await db.query(artistQuery, [`%${searchValue}%`, searchValue])
  return { type: 'artist', results };;
}

const searchAlbums = async (searchValue: string) => {
  // searchValue = searchValue.toLowerCase();
  const albumQuery = `SELECT musicbrainz.release.name, musicbrainz.artist_credit.name, musicbrainz.release.gid FROM musicbrainz.release
    JOIN musicbrainz.artist_credit ON musicbrainz.artist_credit.id = musicbrainz.release.artist_credit
    WHERE musicbrainz.artist_credit.name ILIKE $1
    ORDER BY
      CASE
        WHEN LOWER(musicbrainz.release.name) = LOWER($2) THEN 0
        ELSE 1
      END,
      musicbrainz.release.name`
  const results = await db.query(albumQuery, [`%${searchValue}%`, searchValue])
  return { type: 'album', results };
}

const searchGenres = async (searchValue: string) => {
  const genreQuery = `SELECT musicbrainz.genre.name, musicbrainz.genre.gid FROM musicbrainz.genre WHERE name ILIKE $1`
  const results = await db.query(genreQuery, [`%${searchValue}%`])
  return { type: 'genre', results };
}

export const searchDB = async (searchValue: string, searchType: string | undefined) => {
  try {
    const promises = [];

    if (!searchType || searchType === 'artist') {
      promises.push(searchArtists(searchValue));
    }
    if (!searchType || searchType === 'album') {
      promises.push(searchAlbums(searchValue));
    }
    if (!searchType || searchType === 'genre') {
      promises.push(searchGenres(searchValue));
    }

    const results = await Promise.all(promises);

    const response = results.reduce((accum: {[key: string]: any}, {type, results}) => {
      accum[type] = results;
      return accum;
    }, {});

    console.log('these should be the results: ', response);
    return response;
  } catch (error) {
    console.log(error)
    throw error;
  }
}