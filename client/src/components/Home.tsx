import { useLoaderData } from "react-router-dom";
import AlbumCard from "./Album/AlbumCard";
import LargeHeader from "./LargeHeader";
import LoadingWheel from "./LoadingWheel";

export interface AlbumCardProps {
  album_id: string;
  album_name: string;
  artist_name: string;
}

interface FrontPageDataProps {
  newest: AlbumCardProps[];
  popular: AlbumCardProps[];
}

const Home = () => {
  const FrontPageData = useLoaderData() as FrontPageDataProps;

  if (!FrontPageData) {
    return <LoadingWheel />;
  }

  return (
    <div>
      <LargeHeader title={"Popular Now"} />
      <div className="flex justify-between items-center">
        <div className="mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {FrontPageData.popular.map((release, index) => {
            return (
              <AlbumCard
                key={index}
                album_id={release.album_id}
                album_name={release.album_name}
                artist_name={release.artist_name}
              />
            );
          })}
        </div>
      </div>
      <LargeHeader title={"New Releases"} />
      <div className="mb-5 flex flex-row gap-10 flex-wrap">
        {FrontPageData.newest.map((release, index) => {
          return (
            <AlbumCard
              key={index}
              mbid={release.album_id}
              title={release.album_name}
              artist={release.artist_name}
            />
          );
        })}
      </div>
      <LargeHeader title={"Trending Comments"} />
      <LargeHeader title={"Most Loved Albums of 2023"} />
    </div>
  );
};

export default Home;
