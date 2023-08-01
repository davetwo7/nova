import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from 'axios';

const AlbumCard = ({ mbidplaceholdr }) => {
  const [imgSrc, setImgSrc] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const testMbid = 'c344b5e1-e6be-4155-86c8-c9bc650441ea';

  const fetchAlbumPhoto = async (mbid) => {
    const photos = await axios.get(`https://coverartarchive.org/release/${mbid}`)
    return photos.data.images[0].thumbnails[500]
  }

  useEffect(() => {
    fetchAlbumPhoto(testMbid)
    .then(photo => setImgSrc(photo))
    .catch(err => console.error(err));
  }, [])

  return (
    <div className="popular-container mt-8 flex gap-10">
      <div className="album-element">
        <div className="album-image border shadow-2xl rounded-sm border-neutral-600/10 bg-gradient-to-l from-neutral-900 to-rose-900/20 relative group flex gap-2 justify-center items-end">
            <div className="flex flex-1 w-full gap-10 absolute mb-5 justify-evenly">
            </div>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.15 }}
              onLoad={() => setIsLoaded(true)}
              className="h-56 w-56 rounded-sm"
              src={imgSrc}
            ></motion.img>
          </div>
          <div className="my-2 gap-4">
            <div className="mb-1 hover:text-rose-400 transition-colors duration-100">Tyler, The Creator</div>
            <div className="text-neutral-300 font-satoshi-regular mb-2 hover:text-rose-400 transition-colors duration-100">CALL ME IF YOU GET LOST</div>
            <div className="text-rose-50 text-sm flex justify-start items-center space-x-1">
              <span className="font-satoshi-black text-base text-neutral-50  bg-gradient-to-l from-rose-600/70 to-violet-600/70 rounded-md w-fit px-1.5">10</span>
              <span className="font-satoshi-light text-neutral-500 hover:text-neutral-200 transition-colors duration-100 text-xs">| rating, from 48 reviews</span>
            </div>
          </div>
      </div>
    </div>
  )
}

export default AlbumCard