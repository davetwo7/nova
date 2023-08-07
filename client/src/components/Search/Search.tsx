import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchDB } from "../../utils/Search/Search";
import LargeHeader from "../LargeHeader";
import AlbumCard from "../Album/AlbumCard";
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
      setSearchData(data)
    };
    getSearchData();
  }, [searchValue]);

  if (searchData.length < 1) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <svg
        className="animate-spin h-12 w-12 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      </div>
    )
  }


  return (
    <div>
      <p className="text-3xl font-satoshi-light py-5 text-neutral-300">{`Search Results for ${searchValue}`}</p>
      <LargeHeader title={"Albums"}/>
      <div className="mb-5 flex flex-row gap-10 flex-wrap">
        {searchData.album.map((album, index) => <AlbumCard key={index} mbid={album.gid} title={album.release_group_name} artist={album.artist_credit_name}/>)}
      </div>
      <LargeHeader title={"Artists"}/>
      <LargeHeader title={"Genres"}/>
    </div>
  );
};

export default Search;
