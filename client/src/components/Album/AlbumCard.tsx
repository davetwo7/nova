import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AlbumCardProps } from "../Home";
const AlbumCard = ({ album_id, album_name, artist_name }: AlbumCardProps) => {
  const [imgSrc, setImgSrc] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [goToAlbum, setGoToAlbum] = useState(false);

  return (
    <div className="popular-container mt-8 flex gap-10 w-auto m-10">
      <div className="album-element">
        <Link
          to={`/album/${album_id}`}
          className="album-image border shadow-2xl rounded-sm border-neutral-600/10 bg-gradient-to-l from-neutral-900 to-rose-900/20 relative group flex gap-2 justify-center items-end"
        >
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.15 }}
            onLoad={() => setIsLoaded(true)}
            className="h-56 w-56 rounded-sm"
            src={`https://coverartarchive.org/release-group/${album_id}/front-500`}
          ></motion.img>
          <div className="absolute bg-black w-full h-full opacity-0 hover:opacity-25 transition-opacity duration-75"></div>
        </Link>
        <div className="my-2 gap-4 w-56">
          <div className="mb-1 hover:text-rose-400 transition-colors duration-100 truncate w-full">
            {artist_name}
          </div>
          <div className="mb-2 truncate">
            <Link
              to={`/album/${album_id}`}
              className="text-neutral-300 font-satoshi-regular pb-2 hover:text-rose-400 transition-colors duration-100 truncate w-full"
            >
              {album_name}
            </Link>
          </div>
          <div className="text-rose-50 text-sm flex justify-start items-center space-x-1">
            <span className="font-satoshi-black text-base text-neutral-50  bg-gradient-to-l from-rose-600/70 to-violet-600/70 rounded-md w-fit px-1.5">
              10
            </span>
            <span className="font-satoshi-light text-neutral-500 hover:text-neutral-200 transition-colors duration-100 text-xs">
              | rating, from 48 reviews
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
