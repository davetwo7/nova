const newestReleasesQuery = `SELECT
rg.id AS release_group_id,
rg.gid AS album_id,
rg.name AS album_name,
ac.name AS artist_name
FROM
musicbrainz.release_group rg
JOIN
musicbrainz.artist_credit ac ON rg.artist_credit = ac.id
ORDER BY
rg.id DESC
LIMIT 10;`

const popularReleasesQuery = `SELECT
musicbrainz.users_album_likes.album_id,
musicbrainz.release_group.name AS album_name,
musicbrainz.artist_credit.name AS artist_name,
COUNT(*) as popularity
FROM
musicbrainz.users_album_likes
JOIN
musicbrainz.release_group ON musicbrainz.release_group.gid = musicbrainz.users_album_likes.album_id
JOIN
musicbrainz.artist_credit ON musicbrainz.release_group.artist_credit = musicbrainz.artist_credit.id
WHERE
liked = true
GROUP BY
musicbrainz.users_album_likes.album_id,
musicbrainz.release_group.name,
musicbrainz.artist_credit.name
ORDER BY
popularity DESC LIMIT 10;`

import db from '../../database/db.js'

export const getNewestReleases = async () => {
  try {
    const response = await db.query(newestReleasesQuery)
    return response;
  } catch (error) {
    console.log(error)
    throw error;
  }
}

export const getPopularReleases = async () => {
  try {
    const response = await db.query(popularReleasesQuery)
    return response;
  } catch (error) {
    console.log(error)
    throw error;
  }
}