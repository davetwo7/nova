
import db from '../../database/db.js'

const albumDetailsQuery = `SELECT DISTINCT ON (t.position, t.name)
    t.position as track_number,
    t.name as track_name,
    ac.name as artist_name
FROM
    musicbrainz.track t
JOIN
    musicbrainz.medium m ON t.medium = m.id
JOIN
    musicbrainz.release r ON m.release = r.id
JOIN
    musicbrainz.release_group rg ON r.release_group = rg.id
JOIN
    musicbrainz.artist_credit ac ON t.artist_credit = ac.id
WHERE
    rg.gid = $1
ORDER BY
    t.position`

const other_information = `SELECT
rg.name AS album_name,
rgt.name AS release_type,
l.name AS label_name,
rgm.first_release_date_year,
rgm.first_release_date_month,
rgm.first_release_date_day,
array_agg(DISTINCT t.name) AS genres
FROM
musicbrainz.release_group AS rg
JOIN
musicbrainz.release_group_primary_type AS rgt ON rg.type = rgt.id
JOIN
musicbrainz.release AS r ON r.release_group = rg.id
JOIN
musicbrainz.release_label AS rl ON rl.release = r.id
JOIN
musicbrainz.label AS l ON rl.label = l.id
LEFT JOIN
musicbrainz.release_group_tag AS rgtg ON rg.id = rgtg.release_group
LEFT JOIN
musicbrainz.tag AS t ON rgtg.tag = t.id
JOIN
musicbrainz.release_group_meta AS rgm ON rg.id = rgm.id
WHERE
rg.gid = '6bb871f4-08ec-4a70-9fb3-c1c2b481e090' AND
rgtg.count >= 1
GROUP BY
rg.name, rgt.name, l.name, rgm.first_release_date_year, rgm.first_release_date_month, rgm.first_release_date_day;
`

export const getAlbumDetails = async (mbid: string) => {
  try {
    const response = await db.query(albumDetailsQuery, [mbid])
    return response;
  } catch (error) {
    console.log(error)
    throw error;
  }
}