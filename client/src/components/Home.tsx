import BasicHeader from "./BasicHeader";

import AlbumCard from "./AlbumCard";

const Home = () => {
  return (
    <div>
      <BasicHeader title={"Popular Now"} />
      <div className="mb-5">
        <AlbumCard/>
      </div>
      <BasicHeader title={"New Releases"} />
      <div className="flex flex-row gap-10 ">
        <AlbumCard/>
        <AlbumCard/>
        <AlbumCard/>
        <AlbumCard/>
        <AlbumCard/>
      </div>
    </div>
  );
};

export default Home;
