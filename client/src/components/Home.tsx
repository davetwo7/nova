import BasicHeader from "./BasicHeader";
import { useLoaderData } from "react-router-dom";
import AlbumCard from "./Album/AlbumCard";
import LargeHeader from "./LargeHeader";

const Home = () => {

  const FrontPageData = useLoaderData();

  console.log(FrontPageData)
  return (
    <div>
      <LargeHeader title={"Popular Now"}/>
      <div className="mb-5 flex flex-row gap-10">
      <div className="mb-5 flex flex-row gap-10 flex-wrap">
        {FrontPageData.popular.map(release => {
          return <AlbumCard mbid={release.album_id} title={release.album_name} artist={release.artist_name}/>
        })}
      </div>
      </div>
      <LargeHeader title={"New Releases"} />
      <div className="mb-5 flex flex-row gap-10 flex-wrap">
        {FrontPageData.newest.map(release => {
          return <AlbumCard mbid={release.gid} title={release.release_group_name} artist={release.artist_name}/>
        })}
      </div>
      <LargeHeader title={"Trending Comments"}/>
      <LargeHeader title={"Most Loved Albums of 2023"}/>
    </div>
  );
};

export default Home;
