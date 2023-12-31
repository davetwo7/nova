import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const AlbumCard = ({ mbid, title, artist }) => {
  const [imgSrc, setImgSrc] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [goToAlbum, setGoToAlbum] = useState(false);

  console.log("this is the mbid :", mbid);
  console.log("this is the mbid :", title);
  console.log("this is the mbid :", artist);

  // const fetchAlbumPhoto = async (mbid) => {
  //   // return "https://ia601408.us.archive.org/6/items/mbid-6d50b672-4f8e-4b7a-917b-1ded22808632/mbid-6d50b672-4f8e-4b7a-917b-1ded22808632-33115391771_thumb500.jpg"
  //   // const photos = await axios.get(`https://coverartarchive.org/release-group/${testMbid}/front-500`)
  //   // console.log(photos.data)
  //   // return photos.data
  // }

  // useEffect(() => {
  //   // fetchAlbumPhoto(testMbid)
  //   // .then(photo => setImgSrc(photo))
  //   // .catch(err => console.error(err));
  // }, [])

  return (
    <div className="popular-container mt-8 flex gap-10 w-56 m-10">
      <div className="album-element">
        <Link
          to={`/album/${mbid}`}
          className="album-image border shadow-2xl rounded-sm border-neutral-600/10 bg-gradient-to-l from-neutral-900 to-rose-900/20 relative group flex gap-2 justify-center items-end"
        >
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.15 }}
            onLoad={() => setIsLoaded(true)}
            className="h-56 w-56 rounded-sm"
            src={`https://coverartarchive.org/release-group/${mbid}/front-500`}
          ></motion.img>
          <div className="absolute bg-black w-full h-full opacity-0 hover:opacity-25 transition-opacity duration-75"></div>
        </Link>
        <div className="my-2 gap-4 w-56">
          <div className="mb-1 hover:text-rose-400 transition-colors duration-100 truncate w-full">
            {artist}
          </div>
          <div className="mb-2 truncate">
            <Link
              to={`/album/${mbid}`}
              className="text-neutral-300 font-satoshi-regular pb-2 hover:text-rose-400 transition-colors duration-100 truncate w-full"
            >
              {title}
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
