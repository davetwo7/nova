import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { userLoveAlbum } from "../../utils/Album/UserLoveAlbum";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { extractColors } from "extract-colors";
import { fetchAlbumData } from "../../utils/Album/fetchAlbumData";
import AlbumDetailsHeader from "./AlbumDetailsHeader";
import TrackList from "./TrackList";

const AlbumDetails = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [bgColor, setBgColor] = useState("");
  const [toggleLike, setToggleLike] = useState(false);
  const [albumData, setAlbumData] = useState([])
  const { mbid } = useParams();
  const imgRef = useRef(null);

  useEffect(() => {
    console.log("this is the mbid for the params: ", mbid);
    const getAlbumData = async () => {
      const data = await fetchAlbumData(mbid);
      console.log('this is the data: ', data.data)
      setAlbumData(data.data);
    }
    getAlbumData();
  }, [mbid]);

  const handleImageLoad = () => {
    setIsLoaded(true);
    extractColors(imgRef.current.src, { crossOrigin: "Anonymous" })
      .then((colors) => {
        console.log("these are all the color: ", colors);
        const dominantColor = colors[1].hex;
        console.log("this is the dominant color: ", dominantColor);
        setBgColor(dominantColor);
      })
      .catch(console.error);
  };

  const handleLoveAlbum = () => {
    console.log("love album");
    userLoveAlbum(mbid, toggleLike);
  };

  if (albumData.length < 1) {
    return <div>Loading...</div>
  }

  return (
    <div className="m-4 relative">
      <AlbumDetailsHeader/>
      <div
        style={{
          backgroundImage: `linear-gradient(to top, rgba(128, 128, 128, 0.05) 0%, ${bgColor} 95%)`,
        }}
        className={`flex gap-8 place-items-end p-5 shadow-xl`}
      >
        <div className=" h-64 w-64 shadow-custom-dark">
          <motion.img
            ref={imgRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.15 }}
            onLoad={handleImageLoad}
            className="h-64 w-64 rounded-sm"
            src={`https://coverartarchive.org/release-group/${mbid}/front`}
          ></motion.img>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-satoshi-light text-xl text-shadow-md ml-3">
            {albumData[0].artist_name}
          </div>
          <div className="flex gap-5 items-end">
            <div className="font-satoshi-bold text-7xl text-shadow-md">
              {albumData[0].album_name}
            </div>
            <div className="font-satoshi-black text-shadow-xl text-neutral-50 text-3xl bg-gradient-to-l from-rose-600/70 to-violet-600/70 rounded-md w-fit h-fit px-1.5 mb-3">10</div>
          </div>
        </div>
        {/* <FontAwesomeIcon
          className="text-neutral-100 text-3xl mb-3"
          icon={faHeart}
          onClick={handleLoveAlbum}
        /> */}
      </div>
      <div className="track-list bg-neutral-800 rounded-b-lg">
        {mbid ? <TrackList tracks={albumData} mbid={mbid}/> : null}

      </div>
    </div>
  );
};

export default AlbumDetails;
