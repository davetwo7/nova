import BasicHeader from "./BasicHeader";

import AlbumCard from "./Album/AlbumCard";
import LargeHeader from "./LargeHeader";

const Home = () => {
  return (
    <div>
      <LargeHeader title={"Popular Now"}/>
      <div className="mb-5 flex flex-row gap-10">
      <AlbumCard/>
        <AlbumCard/>
        <AlbumCard/>
        <AlbumCard/>
        <AlbumCard/>
      </div>
      <LargeHeader title={"New Releases"} />
      <div className="mb-5 flex flex-row gap-10 ">
        <AlbumCard/>
        <AlbumCard/>
        <AlbumCard/>
        <AlbumCard/>
        <AlbumCard/>
      </div>
      <LargeHeader title={"Trending Comments"}/>
      <LargeHeader title={"Most Loved Albums of 2023"}/>
    </div>
  );
};

export default Home;
