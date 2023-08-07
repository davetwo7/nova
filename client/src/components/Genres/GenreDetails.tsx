import { useParams } from "react-router-dom";
import titleCase from "../../utils/TitleCase";
import BasicHeader from "../BasicHeader";
import { useEffect, useState } from "react";
import { GenreAlbumsResponse, fetchGenreAlbums } from "../../utils/Genre/GenreAlbumLoader";

export default function GenreDetails() {
  const { genre } = useParams();
  const [genreData, setGenreData] = useState<GenreAlbumsResponse | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      if (genre) {
        const data = await fetchGenreAlbums(genre);
        setGenreData(data);
      }
    };
    fetchData();
  }, [genre]);

  useEffect(() => {
    console.log('this is the genreData: ', genreData)
  }, [genreData])

  return (
    <>
      <h2 className="font-satoshi-bold text-5xl my-8">{titleCase(genre)}</h2>

      {/* Section: Top-ranked Albums */}
      <BasicHeader title={`Top-ranked ${titleCase(genre)} Albums`} />
      <div className="my-2 flex gap-10 py-4">
        <div className="w-48 h-48 bg-neutral-800 flex justify-center items-center text-3xl">
          AA
        </div>
        <div className="w-48 h-48 bg-neutral-800 flex justify-center items-center text-3xl">
          AA
        </div>
        <div className="w-48 h-48 bg-neutral-800 flex justify-center items-center text-3xl">
          AA
        </div>
        <div className="w-48 h-48 bg-neutral-800 flex justify-center items-center text-3xl">
          AA
        </div>
        <div className="w-48 h-48 bg-neutral-800 flex justify-center items-center text-3xl">
          AA
        </div>
      </div>

      {/* Section: Popular Artists */}
      <BasicHeader title={`Popular Artists`} />
      <div className="my-8 flex gap-12">
        <div className="w-48 h-48 bg-neutral-800 rounded-full flex justify-center items-center text-3xl">
          TR
        </div>
        <div className="w-48 h-48 bg-neutral-800 rounded-full flex justify-center items-center text-3xl">
          TR
        </div>
        <div className="w-48 h-48 bg-neutral-800 rounded-full flex justify-center items-center text-3xl">
          TR
        </div>
        <div className="w-48 h-48 bg-neutral-800 rounded-full flex justify-center items-center text-3xl">
          TR
        </div>
        <div className="w-48 h-48 bg-neutral-800 rounded-full flex justify-center items-center text-3xl">
          TR
        </div>
      </div>
      <BasicHeader title={`Top-ranked ${titleCase(genre)} Albums`} />
      <div className="my-8 flex gap-12">
        <div className="w-48 h-48 bg-neutral-800 rounded-full flex justify-center items-center text-3xl">
          TR
        </div>
        <div className="w-48 h-48 bg-neutral-800 rounded-full flex justify-center items-center text-3xl">
          TR
        </div>
        <div className="w-48 h-48 bg-neutral-800 rounded-full flex justify-center items-center text-3xl">
          TR
        </div>
        <div className="w-48 h-48 bg-neutral-800 rounded-full flex justify-center items-center text-3xl">
          TR
        </div>
        <div className="w-48 h-48 bg-neutral-800 rounded-full flex justify-center items-center text-3xl">
          TR
        </div>
      </div>
      <BasicHeader title={`Top-ranked ${titleCase(genre)} Albums`} />
      <div className="my-8 flex gap-12">
        <div className="w-48 h-48 bg-neutral-800 rounded-full flex justify-center items-center text-3xl">
          TR
        </div>
        <div className="w-48 h-48 bg-neutral-800 rounded-full flex justify-center items-center text-3xl">
          TR
        </div>
        <div className="w-48 h-48 bg-neutral-800 rounded-full flex justify-center items-center text-3xl">
          TR
        </div>
        <div className="w-48 h-48 bg-neutral-800 rounded-full flex justify-center items-center text-3xl">
          TR
        </div>
        <div className="w-48 h-48 bg-neutral-800 rounded-full flex justify-center items-center text-3xl">
          TR
        </div>
      </div>
    </>
  );
}
