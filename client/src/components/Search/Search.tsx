import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchDB } from "../../utils/Search/Search";
import LargeHeader from "../LargeHeader";
import AlbumCard from "../Album/AlbumCard";
import LoadingWheel from "../LoadingWheel";
const Search = () => {
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("searchValue");
  const searchType = searchParams.get("searchType");

  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    // const currentSearchType = searchType;
    // if (currentSearchType === null) {
    //   currentSearchType = undefined;
    // }
    console.log(searchValue, searchType);
    const getSearchData = async () => {
      const data = await searchDB(searchValue, searchType);
      console.log("this should be the data: ", data);
      setSearchData(data);
    };
    getSearchData();
  }, [searchValue]);

  if (searchData.length < 1) {
    return <LoadingWheel />;
  }

  return (
    <div>
      <p className="text-3xl font-satoshi-light py-5 text-neutral-300">{`Search Results for ${searchValue}`}</p>
      <LargeHeader title={"Albums"} />
      <div className="mb-5 flex flex-row gap-10 flex-wrap">
        {searchData.album.map((album, index) => (
          <AlbumCard
            key={index}
            mbid={album.gid}
            title={album.release_group_name}
            artist={album.artist_credit_name}
          />
        ))}
      </div>
      <LargeHeader title={"Artists"} />
      <LargeHeader title={"Genres"} />
    </div>
  );
};

export default Search;
