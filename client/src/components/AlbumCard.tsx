import { useState } from "react";
import { motion } from "framer-motion";

const AlbumCard = () => {

  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="popular-container mt-8 flex gap-10">
      <div className="album-element">
        <div className="album-image border rounded-lg border-neutral-600 bg-gradient-to-l from-neutral-900 to-rose-900/70 relative group flex gap-2 justify-center items-end">
            <div className="flex flex-1 w-full gap-10 absolute mb-5 justify-evenly">
            </div>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.15 }}
              onLoad={() => setIsLoaded(true)}
              className="h-56 w-56 rounded-lg"
              src="https://ia800302.us.archive.org/33/items/mbid-5b07fe49-39a9-47a6-97b3-e5005992fb2a/mbid-5b07fe49-39a9-47a6-97b3-e5005992fb2a-2270157148.jpg"
            ></motion.img>
          </div>
          <div className="my-2 gap-4">
            <div className="mb-1 hover:text-rose-400 transition-colors duration-100">Tyler, The Creator</div>
            <div className="text-neutral-300 font-satoshi-regular mb-2 hover:text-rose-400 transition-colors duration-100">CALL ME IF YOU GET LOST</div>
            <div className="text-rose-50 text-sm flex justify-start items-center space-x-1">
              <span className="font-satoshi-bold text-lg bg-rose-600 rounded-md w-fit px-2 shadow-xl">9</span>
              <span className="font-satoshi-light text-neutral-400 hover:text-neutral-200 transition-colors duration-100"> | based on 100 reviews</span>
            </div>
          </div>
      </div>
    </div>
  )
}

export default AlbumCard