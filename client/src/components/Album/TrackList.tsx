import Track from "./Track";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faDeezer,
  faSoundcloud,
  faItunes,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart as heart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as heartSolid} from "@fortawesome/free-solid-svg-icons";
import { userLoveAlbum } from "../../utils/Album/UserLoveAlbum";
import { useState } from "react";

export const TrackList = ({ tracks, mbid }) => {
  console.log("tracks: ", tracks);
  console.log('this is the mbid in the track list: ', mbid)
  const [liked, setLiked] = useState(false);
  const uniqueUrls = tracks.reduce((urls, track) => {
    if (track.url) {
      if (track.url.includes('spotify') && urls.every(url => url.type !== 'spotify' && url.url !== track.url)) {
        urls.push({ type: 'spotify', url: track.url });
      } else if (track.url.includes('apple') && urls.every(url => url.type !== 'apple' && url.url !== track.url)) {
        urls.push({ type: 'apple', url: track.url });
      } else if (track.url.includes('soundcloud') && urls.every(url => url.type !== 'soundcloud' && url.url !== track.url)) {
        urls.push({ type: 'soundcloud', url: track.url });
      } else if (track.url.includes('deezer') && urls.every(url => url.type !== 'deezer' && url.url !== track.url)) {
        urls.push({ type: 'deezer', url: track.url });
      }
    }
    return urls;
  }, []);

  const handleLike = () => {
    setLiked(!liked);
    userLoveAlbum(mbid, liked);
  }

  if (tracks.length < 1) {
    return <div>Loading...</div>;
  }

  const uniqueTracks = tracks.reduce((unique, track) => {
    if (!unique.some((uni) => uni.track_number === track.track_number)) {
      unique.push(track);
    }
    return unique;
  }, []);

  return (
    <div className="p-3">
      <div className="flex gap-3 text-2xl pb-1 px-2 items-center bg-gradient-to-t from-neutral-900 to-neutral-900/30 pt-2">
      {liked ? <FontAwesomeIcon icon={heart} className="border-r border-rose-50/20 pr-2 hover:text-rose-500 text-lg transition-colors duration-150 text-rose-100 text-shadow-lg cursor-pointer" onClick={handleLike}/> :
      <FontAwesomeIcon icon={heartSolid} className="border-r border-rose-50/20 pr-2 text-rose-500 text-lg transition-colors duration-150 text-shadow-lg cursor-pointer" onClick={handleLike}/>}
    {uniqueUrls.map(({ type, url }) => {
      let icon;
      switch (type) {
        case 'spotify':
          icon = faSpotify;
          break;
        case 'apple':
          icon = faItunes;
          break;
        case 'soundcloud':
          icon = faSoundcloud;
          break;
        case 'deezer':
          icon = faDeezer;
          break;
        default:
          icon = null;
      }
      return (
        <a href={url} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={icon} className="hover:text-rose-500 transition-colors duration-150 text-rose-100 text-shadow-lg"/>
        </a>
      );
    })}
      </div>
      <div className=" font-satoshi-medium text-xl text-shadow-md bg-neutral-900 text-neutral-200 items-center p-2 rounded-b-lg">
        Track List
      </div>
      <div className="font-satoshi-regular flex justify-center items-center bg-neutral-800 p-2 text-neutral-300/60 text-sm">
        <div className="border-r w-fit grow-0 border-rose-50/20 pr-2 text-neutral-300/60 text-sm">
          #
        </div>
        <div className="border-r w-full grow-1 border-rose-50/20 pl-2 text-neutral-300/60 text-sm">
          Title
        </div>
        <div className=" w-fit grow-0 pl-2 ">Rating</div>
      </div>
      <div className="font-satoshi-medium rounded-t-lg text-xl text-shadow-md bg-neutral-900 text-neutral-200 items-center p-2 flex flex-col">
        {uniqueTracks.map((track, index) => (
          <Track key={index} track={track} />
        ))}
      </div>
    </div>
  );
};

export default TrackList;
