import db from '../../database/db.js'

const searchArtists = async (searchValue: string) => {
  const artistQuery = `
    SELECT * FROM (
      SELECT
        musicbrainz.artist_tag.artist AS artist_id,
        musicbrainz.artist_tag.tag AS tag_id,
        musicbrainz.tag.ref_count,
        musicbrainz.artist.name AS artist_name,
        musicbrainz.tag.name AS tag_name,
        ROW_NUMBER() OVER (
          PARTITION BY musicbrainz.artist_tag.artist
          ORDER BY musicbrainz.tag.ref_count DESC
        ) row_number
      FROM musicbrainz.artist_tag
      JOIN musicbrainz.tag ON musicbrainz.tag.id = musicbrainz.artist_tag.tag
      JOIN musicbrainz.artist ON musicbrainz.artist.id = musicbrainz.artist_tag.artist
      WHERE LOWER(musicbrainz.artist.name) ILIKE LOWER($1)
    ) t
    WHERE row_number <= 5
    ORDER BY
      CASE
        WHEN LOWER(artist_name) = LOWER($2) THEN 0
        ELSE 1
      END, ref_count DESC LIMIT 12
  `;
  const results = await db.query(artistQuery, [`%${searchValue}%`, searchValue])
  return { type: 'artist', results };;
}

const searchAlbums = async (searchValue: string) => {
  searchValue = searchValue.toLowerCase();
  const albumQuery = `SELECT musicbrainz.release_group.name AS release_group_name, musicbrainz.artist_credit.name AS artist_credit_name, musicbrainz.release_group.gid FROM musicbrainz.release_group
    JOIN musicbrainz.artist_credit ON musicbrainz.artist_credit.id = musicbrainz.release_group.artist_credit
    WHERE musicbrainz.release_group.name ILIKE $1
    ORDER BY
      CASE
        WHEN LOWER(musicbrainz.release_group.name) = LOWER($2) THEN 0
        ELSE 1
      END,
      musicbrainz.release_group.name
      LIMIT 12`
  const results = await db.query(albumQuery, [`%${searchValue}%`, searchValue])
  return { type: 'album', results };
}

const searchGenres = async (searchValue: string) => {
  const genreQuery = `SELECT musicbrainz.genre.name, musicbrainz.genre.gid FROM musicbrainz.genre WHERE name ILIKE $1`
  const results = await db.query(genreQuery, [`%${searchValue}%`])
  return { type: 'genre', results };
}

type SearchFunction = (searchValue: string) => Promise<{ type: string; results: any[]; }>;

export const searchDB = async (searchValue: string, searchType: string | null) => {
  try {
    const promises: Promise<{ type: string; results: any[]; }>[] = [];

    const searches: Record<string, SearchFunction> = {
      artist: searchArtists,
      album: searchAlbums,
      genre: searchGenres
    }

    console.log('this is the search type: ', searchType)

    for (const search in searches) {
      if (searchType === search) {
        promises.push(searches[search](searchValue))
      }
    }
    // if (!searchType || searchType === 'artist') {
    //   promises.push(searchArtists(searchValue));
    // }
    // if (!searchType || searchType === 'album') {
    //   promises.push(searchAlbums(searchValue));
    // }
    // if (!searchType || searchType === 'genre') {
    //   promises.push(searchGenres(searchValue));
    // }



    const results = await Promise.all(promises);
    console.log('these are the results: ', results)
    const response = results.reduce((accum: { [key: string]: any }, { type, results }) => {
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