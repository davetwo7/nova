import db from '../../database/db.js'

type AlbumLikeToggleParams = {
  userId: string;
  mbid: string;
  liked: boolean;
};

export const dbToggleUserAlbumLike = async ({ userId, mbid, liked }: AlbumLikeToggleParams) => {
  try {
    console.log('this is the album_id in the db model: ', mbid)
    const likeExists = await db.query("SELECT * FROM musicbrainz.users_album_likes WHERE user_id = $1 AND album_id = $2", [userId, mbid])
    if (likeExists.length > 1) {
      const response = await db.query("UPDATE musicbrainz.users_album_likes SET liked = $1 WHERE user_id = $2 AND album_id = $3", [liked, userId, mbid])
      return response;
    } else {
      const response = await db.query("INSERT INTO musicbrainz.users_album_likes (user_id, album_id, liked, timestamp) VALUES ($1, $2, $3, CURRENT_TIMESTAMP)", [userId, mbid, liked])
      return response;
    }
  } catch (error) {
    console.log(error)
    throw error;
  }
}
